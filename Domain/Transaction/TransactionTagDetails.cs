using System.ComponentModel.DataAnnotations;

namespace Domain.Transaction
{
    public class TransactionTagDetails : DomainBase, IChildEntity<long>
    {
        [Required]
        [MaxLength(500)]
        public string Text { get; set; }

        public long TransactionId { get; set; }

        public long MusterEntityFk { get; set; }
    }
}
