using System;

namespace Domain.Gmail
{
    public class MessageDetails
    {
        public long UniqueId { get; set; }

        public string Subject { get; set; }

        public string From { get; set; }

        public string Body { get; set; }

        public DateTimeOffset Date { get; set; }
    }
}
