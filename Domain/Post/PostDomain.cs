using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Post
{
    public class PostDomain : DomainBaseWithStrKey
    {
        [Required]
        public DateTime DeliveredDate { get; set; } = DateTime.Today;

        public string RegisteredBy { get; set; }

        public LetterStatus Status { get; set; }

        public LetterType Type { get; set; }

        [DataType(DataType.MultilineText)]
        public string Note { get; set; }

        [DataType(DataType.MultilineText)]
        [Required]
        public string Sender { get; set; }

        [Required]
        public ValueObjectStrKey Recipient { get; set; }
    }
}
