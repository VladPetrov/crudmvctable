using System;
using System.Globalization;
using Common;
using CsvHelper;
using CsvHelper.Configuration;
using CsvHelper.TypeConversion;
using Domain.FileParser;
using JetBrains.Annotations;

namespace Domain.Transaction.CsvImport
{
    [UsedImplicitly]
    public class TransactionFileRecordMap : FileRecordMapBase<TransactionFileRecordModel>
    {
        private static readonly string[] DateTimeFormats = new[] { "MM/dd/yyyy" };

        public TransactionFileRecordMap()
        {
            var culture = CultureInfo.CreateSpecificCulture("en-US");

            Map(x => x.CreatedTime)
                .Name(GetHeaderName(nameof(TransactionFileRecordModel.CreatedTime)))
                .TypeConverterOption.CultureInfo(culture)
                .TypeConverterOption.Format(DateTimeFormats);

            Map(x => x.ToAccount)
                .Name(GetHeaderName(nameof(TransactionFileRecordModel.ToAccount)));

            Map(x => x.Amount)
                .Name(GetHeaderName(nameof(TransactionFileRecordModel.Amount)))
                .Validate(IsRequired)
                .TypeConverter<AmountConverter>();

            Map(x => x.IdOfTransaction)
                .Name(GetHeaderName(nameof(TransactionFileRecordModel.IdOfTransaction)))
                .Validate(IsRequired);

            Map(x => x.Type)
                .Name(GetHeaderName(nameof(TransactionFileRecordModel.Type)));

            Map(x => x.PayerAccount)
                .Name(GetHeaderName(nameof(TransactionFileRecordModel.PayerAccount)));
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

            text = text.Trim().Replace(" ","");
            
            return (long)Math.Truncate(float.Parse(text, CultureInfo.InvariantCulture) * 100);
        }
    }
}
