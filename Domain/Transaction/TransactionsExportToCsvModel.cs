using System;

namespace Domain.Transaction
{
    public class TransactionsExportToCsvModel
    {
        public string CreatedTime { get; set; }

        public string Iban { get; set; }

        public long Amount { get; set; }

        public string Note { get; set; }

        public string Type { get; set; }

        public string Category { get; set; }
        
        public string Project { get; set; }
        
        public string Entity { get; set; }
        
        public string RecipientEntity { get; set; }
        
        public string HasFiles { get; set; }

        public string Source { get; set; }

        public string Files { get; set; }
    }
}
