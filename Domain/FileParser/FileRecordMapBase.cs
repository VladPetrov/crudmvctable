using System.Collections.Generic;
using System.Reflection;
using Common.Extensions;
using CsvHelper.Configuration;

// ReSharper disable VirtualMemberCallInConstructor
namespace Domain.FileParser
{
    public abstract class FileRecordMapBase<TRecord> : ClassMap<TRecord> where TRecord : FileRecordBase
    {
        protected readonly Dictionary<string, string> FieldsMap = new Dictionary<string, string>();

        protected FileRecordMapBase()
        {
            AutoMap();

            Map(x => x.RowId).ConvertUsing(row => row.Context.RawRow - 1);

            foreach (var property in typeof(TRecord).GetProperties(BindingFlags.Public | BindingFlags.Instance))
            {
                FieldsMap.Add(property.Name, property.GetDisplayName());
            }
        }
        protected string GetHeaderName(string property)
        {
            return FieldsMap[property];
        }

        protected bool IsRequired(string value) // 0 -> error
        {
            return !string.IsNullOrEmpty(value) && !string.IsNullOrWhiteSpace(value);
        }
    }
}
