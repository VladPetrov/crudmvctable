using System;

namespace Domain.Post
{
    public class PostDisplay : DomainBaseWithStrKey
    {
        public DateTime DeliveredDate { get; set; }

        public string RegisteredBy { get; set; }

        public LetterStatus Status { get; set; }

        public LetterType Type { get; set; }

        public string Note { get; set; }

        public string Sender { get; set; }

        public string Recipient { get; set; } //field has no search! 
    }
}
