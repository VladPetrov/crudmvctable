using System.IO;
using System.Linq;
using System.Text;
using Common;
using CsvHelper;

namespace Domain.FileParser.Csv
{
    public class CsvFileParser<TRecord, TMapping> where TRecord : FileRecordBase where TMapping : FileRecordMapBase<TRecord>
    {
        public string Delimiter { get; set; } = ",";

        public ParseResult<TRecord> Parse(Stream stream)
        {
            var result = new ParseResult<TRecord>();

            using (var streamReader = new StreamReader(stream, Encoding.UTF8))
            {
                var reader = streamReader.CreateCsvReader();

                reader.Configuration.RegisterClassMap<TMapping>();

                reader.Configuration.Delimiter = Delimiter;

                reader.Configuration.BadDataFound = context =>
                {
                    AddError(result, "Bad Data found during parsing file.", context);
                };

                reader.Configuration.MissingFieldFound = (headerNames, index, context) =>
                {
                    AddError(result, "Missing Field found during parsing file.", context);
                };

                reader.Configuration.ReadingExceptionOccurred = e =>
                {
                    AddError(result, $"Exception during parsing file.\nMessage: \"{e.Message}\"\n", e.ReadingContext);
                };

                reader.Configuration.HeaderValidated = (isValid, headerNames, headerNameIndex, context) =>
                {
                    if (!isValid)
                    {
                        AddError(result, $"Header matching ['{string.Join("', '", headerNames)}'] names at index {headerNameIndex} was not found.", context);
                    }
                };

                var records = reader.GetRecords<TRecord>().ToList();
               
                result.Records.AddRange(records);
            }

            return result;
        }

        private void AddError(ParseResult<TRecord> result, string message, ReadingContext context)
        {
            var error = $"{message} Row number {context.RawRow}, Field \"{(context.CurrentIndex > 0 ? context.HeaderRecord[context.CurrentIndex] : "unknown")}\", Raw record \"{context.RawRecord}\"";

            result.Errors.Add(error);

            Log.Logger().Error(error);
        }
    }
}
