using CsvHelper;
using CsvHelper.Configuration;
using CsvHelper.TypeConversion;
using Domain.FileParser;
using JetBrains.Annotations;

namespace Domain.Project
{
    public class ProjectFileRecordMap : FileRecordMapBase<ProjectFileRecordModel>
    {
        private static readonly string[] DateTimeFormats = new[] { "dd-MM-yyyy", "dd/MM/yyyy", "d/M/yyyy" };

        public ProjectFileRecordMap()
        {
            Map(x => x.Name)
                .Name(this.GetHeaderName(nameof(ProjectFileRecordModel.Name)));

            Map(x => x.Entity)
                .Name(this.GetHeaderName(nameof(ProjectFileRecordModel.Entity)));

            Map(x => x.StartDate)
                .TypeConverterOption.Format(DateTimeFormats);

            Map(x => x.EndDate)
                .TypeConverterOption.Format(DateTimeFormats);

            Map(x => x.Budget)
                .TypeConverter<AmountConverter>();
        }
    }

    [UsedImplicitly]
    public class AmountConverter : ITypeConverter
    {
        public string ConvertToString(object value, IWriterRow row, MemberMapData memberMapData)
        {
            throw new System.NotImplementedException();
        }

        public object ConvertFromString(string text, IReaderRow row, MemberMapData memberMapData)
        {
            if (string.IsNullOrEmpty(text))
            {
                return null;
            }

            return long.Parse(text.Trim()) * 100;
        }
    }
}
