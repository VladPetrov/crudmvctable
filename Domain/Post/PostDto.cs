using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Post
{
    public class PostDto
    {
        [Display(Name = "Date")]
        public DateTime DeliveredDate { get; set; }

        public string Sender { get; set; }

        [Display(Name = "Recipient")]
        public string RecipientFirm { get; set; }

        public LetterType Type { get; set; }

        public string ClientName { get; set; }

        public string StreetAndNumber { get; set; }

        public string PostalCode { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Note { get; set; }
    }
}
