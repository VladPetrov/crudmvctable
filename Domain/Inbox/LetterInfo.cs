using Domain.Post;
using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Inbox
{
    public class LetterInfo 
    {
        [Display(Name = "Date")]
        public DateTime DeliveredDate { get; set; }
        
        public LetterType Type { get; set; }

        public string Note { get; set; }

        public string Sender { get; set; }

        public string Recipient { get; set; }
    }
}
