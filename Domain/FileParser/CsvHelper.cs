using System;
using System.IO;
using CsvHelper;

namespace Domain.FileParser
{
    public static class CsvHelper
    {
        public static CsvReader CreateCsvReader(this TextReader tr, bool hasHeaderRecord = true)
        {
            var csv = new CsvReader(tr);
            csv.Configuration.HasHeaderRecord = hasHeaderRecord;
            csv.Configuration.MissingFieldFound = (row, index, context) => throw new Exception($"Missing Field, index {index}");
            csv.Configuration.Delimiter = ",";
            return csv;
        }
    }
}