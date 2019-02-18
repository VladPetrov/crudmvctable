using System.Collections.Generic;
using Domain.Message;

namespace DAL.Model
{
    public class Message : EntityBase
    {
        public string Text { get; set; }
        public bool IsViewed { get; set; }
        public int Number { get; set; }
        public MessageType Type { get; set; }
        public virtual List<SubMessage> SubMessages { get; set; } = new List<SubMessage>();
    }
}
