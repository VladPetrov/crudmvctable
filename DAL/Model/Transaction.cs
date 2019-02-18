using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Domain.Transaction;

namespace DAL.Model
{
    public class Transaction : EntityBase
    {
        public DateTime CreatedTime { get; set; }

        [MaxLength(500)]
        public string  Iban { get; set; }

        public long Amount { get; set; }

        public string  Note { get; set; }

        [ForeignKey(nameof(Entity))]
        public long? EntityId { get; set; }

        public virtual Entity Entity { get; set; }

        [ForeignKey(nameof(RecipientEntity))]
        public long? RecipientEntityId { get; set; }

        public virtual Entity RecipientEntity { get; set; }

        [ForeignKey(nameof(Category))]
        public long? CategoryId { get; set; }

        public virtual Category Category { get; set; }

        [ForeignKey(nameof(Project))]
        public long? ProjectId { get; set; }

        public virtual Project Project { get; set; }

        public virtual List<TransactionFiles> Files { get; set; }
        
        public string IdOfTransaction { get; set; }

        public TransactionSource Source { get; set; }

        public TransactionType Type { get; set; }
    }
}
