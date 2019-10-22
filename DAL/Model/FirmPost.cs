using Domain.Post;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class FirmPost : EntityBaseWithStrKey
    {
        public DateTime DeliveredDate { get; set; }

        public string RegisteredBy { get; set; }

        public LetterStatus Status { get; set; }

        public LetterType Type { get; set; }

        public string Note { get; set; }

        [Required]
        public string Sender { get; set; }
        
        [ForeignKey(nameof(Firm))]
        public string FirmId { get; set; }

        public virtual ClientFirm Firm { get; set; }
    }
}
