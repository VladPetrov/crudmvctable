using System;
using System.ComponentModel.DataAnnotations;
using Domain.FileParser;

namespace Domain.Transaction.CsvImport
{
    public class TransactionFileRecordModel : FileRecordBase
    {
        [Display(Name = "Date")]
        public DateTime CreatedTime { get; set; }

        [Display(Name = "To account")]
        public string ToAccount { get; set; }

        [Display(Name = "Volume")]
        public long Amount { get; set; }

        [Display(Name = "Note")]
        public string Note { get; set; }

        [Display(Name = "ID of transaction")]
        public string IdOfTransaction { get; set; }

        [Display(Name = "Type")]
        public string Type { get; set; }

        [Display(Name = "Payer account")]
        public string PayerAccount { get; set; }
    }
}
