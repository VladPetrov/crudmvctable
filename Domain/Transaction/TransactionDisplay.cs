using System;
using System.Collections.Generic;


namespace Domain.Transaction
{
    public class TransactionDisplay : DomainBase
    {
        public DateTime CreatedTime { get; set; }
        
        public string Iban { get; set; }

        public long Amount { get; set; }

        public string Note { get; set; }

        public TransactionType Type { get; set; }

        public string Category { get; set; }

        public long CategoryId { get; set; }
        
        public string Project { get; set; }

        public long ProjectId { get; set; }
        
        public string Entity { get; set; }

        public long EntityId { get; set; }

        public string RecipientEntity { get; set; }

        public long RecipientEntityId { get; set; }

        public bool HasFiles { get; set; }

        public TransactionSource Source { get; set; }

        public List<ValueObject> Files { get; set; }
    }
}
