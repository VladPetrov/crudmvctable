using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using Common;
using Common.Extensions;
using JetBrains.Annotations;
using OfficeOpenXml;

namespace Domain.FileParser.Excel
{
    public class ExcelFileParser<TRecord> where TRecord : FileRecordBase, new()
    {
        private readonly List<string> _supportedDateFormats = new List<string> {"dd-MM-yyyy"};

        public IReadOnlyCollection<string> SupportedDateFormats => _supportedDateFormats;

        public ParseResult<TRecord> Parse(Stream stream)
        {
            var result = new ParseResult<TRecord>();

            var document = new ExcelPackage(stream);

            foreach (var worksheet in document.Workbook.Worksheets)
            {
                try
                {
                    ParseWorkSheet(worksheet, result);
                }
                catch (Exception e)
                {
                    AddError(e.Message, result);
                }
            }

            return result;
        }

        public void AddDateTimeFormat(string format)
        {
            _supportedDateFormats.Add(format);
        }

        private void ParseWorkSheet(ExcelWorksheet worksheet, ParseResult<TRecord> result)
        {
            if (!worksheet.Cells.Any())
            {
                throw new Exception($"Worksheet {worksheet.Name} is empty");
            }

            var columns = MapColumns(worksheet);

            var rows = worksheet.Cells
                .Select(cell => cell.Start.Row)
                .Distinct()
                .OrderBy(x => x)
                .Skip(1);

            foreach (var row in rows)
            {
                try
                {
                    ParseRow(worksheet, row, columns, result);
                }
                catch (Exception e)
                {
                    AddError(e.Message, result);
                }
            }
        }

        private void ParseRow(ExcelWorksheet worksheet, int row, List<Column> columns, ParseResult<TRecord> result)
        {
            var record = new TRecord {RowId = row - 1};

            foreach (var column in columns)
            {
                var property = column.Property;

                var cell = worksheet.Cells[row, column.Index];

                try
                {
                    ParseCell(record, property, cell);
                }
                catch (Exception e)
                {
                    throw new Exception($"Error while processing row: {row}, column: {column.Name}, message: {e.Message}");
                }
            }

            result.Records.Add(record);
        }

        private void ParseCell(TRecord record, PropertyInfo property, [CanBeNull] ExcelRange cell)
        {
            if (cell == null)
            {
                SetDefault(record, property);
            }
            else if (property.PropertyType == typeof(Int32))
            {
                property.SetValue(record, cell.GetValue<int>());
            }
            else if (property.PropertyType == typeof(Int64))
            {
                property.SetValue(record, cell.GetValue<long>());
            }
            else if (property.PropertyType == typeof(double))
            {
                property.SetValue(record, cell.GetValue<double>());
            }
            else if (property.PropertyType == typeof(decimal))
            {
                property.SetValue(record, cell.GetValue<decimal>());
            }
            else if (property.PropertyType == typeof(DateTime))
            {
                property.SetValue(record, ParseDate(cell.GetValue<string>()));
            }
            else if (property.PropertyType == typeof(bool))
            {
                property.SetValue(record, cell.GetValue<bool>());
            }
            else if(property.PropertyType == typeof(string))
            {
                property.SetValue(record, cell.GetValue<string>());
            }
            else if (property.PropertyType.IsEnum)
            {
                property.SetValue(record, cell.GetValue<string>().ParseToEnum(property.PropertyType));
            }
            else
            {
                throw new Exception($"Unknown property type: {property.PropertyType}");
            }
        }

        private DateTime ParseDate(string dateStr)
        {
            foreach (var format in _supportedDateFormats)
            {
                if (DateTime.TryParseExact(dateStr, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out var dateValue))
                {
                    return dateValue;
                }
            }
            throw new ArgumentException($"Found unknown DateTime format: '{dateStr}'");
        }

        private static void SetDefault(TRecord record, PropertyInfo property)
        {
            var propertyType = property.PropertyType;

            var defaultVal = propertyType.IsValueType ? Activator.CreateInstance(propertyType) : null;

            property.SetValue(record, defaultVal);
        }

        private static List<Column> MapColumns(ExcelWorksheet worksheet)
        {
            var columns = new List<Column>();

            var properties = typeof(TRecord)
                .GetProperties(BindingFlags.Public | BindingFlags.Instance)
                .Where(x => x.GetCustomAttribute<SkipColumnAttribute>() == null);

            foreach (var property in properties)
            {
                var columnName = property.GetDisplayName();

                columns.Add(new Column
                {
                    Property = property,
                    Name = columnName,
                    Index = GetColumnNumber(worksheet, columnName)
                });
            }

            return columns;
        }

        private static int GetColumnNumber(ExcelWorksheet worksheet, string columnName)
        {
            var number = worksheet.Cells["1:1"].FirstOrDefault(c => string.Equals(c.Value?.ToString(), columnName, StringComparison.InvariantCultureIgnoreCase))?.Start?.Column;

            if (!number.HasValue)
            {
                throw new Exception($"Column with name \"{columnName}\" was not found at worksheet \"{worksheet.Name}\"");
            }

            return number.Value;
        }

        private void AddError(string message, ParseResult<TRecord> result)
        {
            result.Errors.Add(message);

            Log.Logger().Error(message);
        }
        
        private class Column
        {
            public PropertyInfo Property { get; set; }

            public int Index { get; set; }

            public string Name { get; set; }
        }
    }
}