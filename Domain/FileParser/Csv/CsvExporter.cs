using CsvHelper;
using System.Collections.Generic;
using System.IO;

namespace Domain.FileParser.Csv
{
    public class CsvExporter
    {
        public string Delimiter { get; set; } = ",";

        public byte[] Export<T>(IEnumerable<T> items)
        {
            using (var memoryStream = new MemoryStream())
            {
                using (var streamWriter = new StreamWriter(memoryStream))
                using (var csvWriter = new CsvWriter(streamWriter))
                {
                    csvWriter.Configuration.Delimiter = Delimiter;

                    csvWriter.WriteRecords(items);
                }

                return memoryStream.ToArray();
            }
        }
    }
}
