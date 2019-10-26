using Domain.Post;
using System;

namespace Domain.Inbox
{
    public class LetterInfo 
    {
        public DateTime DeliveredDate { get; set; }

        public string RegisteredBy { get; set; }

        public LetterStatus Status { get; set; }

        public LetterType Type { get; set; }

        public string Note { get; set; }

        public string Sender { get; set; }

        public string Recipient { get; set; }
    }
}
