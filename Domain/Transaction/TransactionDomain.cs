using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Domain.Transaction
{
    public class TransactionDomain : DomainBase
    {
        [Display(Name = "Created Time")]
        public DateTime CreatedTime { get; set; }

        [MaxLength(500)]
        public string Iban { get; set; }

        public long Amount { get; set; }

        [DataType(DataType.MultilineText)]
        public string Note { get; set; }

        public TransactionType Type { get; set; }

        public ValueObject Category { get; set; } = new ValueObject();

        public ValueObject Project { get; set; } = new ValueObject();

        public ValueObject Entity { get; set; } = new ValueObject();

        [Display(Name = "Recipient Entity")]
        public ValueObject RecipientEntity { get; set; } = new ValueObject();

        public TransactionSource Source { get; set; }

        public string IdOfTransaction { get; set; }

        public List<ValueObject> Files { get; set; } = new List<ValueObject>();
    }
}
