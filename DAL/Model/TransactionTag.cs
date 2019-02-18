using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class TransactionTag : EntityBase
    {
        [Required]
        [MaxLength(500)]
        public string Text { get; set; }

        [ForeignKey(nameof(Transaction))]
        public long TransactionId { get; set; }
    }
}