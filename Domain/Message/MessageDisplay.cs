
namespace Domain.Message
{
    public class MessageDisplay : DomainBase
    {
        public string Text { get; set; }
        public bool IsViewed { get; set; }
        public int Number { get; set; }
        public MessageType Type { get; set; }
    }
}
