using System.ComponentModel.DataAnnotations;

namespace Domain.Message
{
    public class MessageDetails : DomainBase
    {
        [Required]
        public string Text { get; set; }
        public bool IsViewed { get; set; }
        public int Number { get; set; }
        public MessageType Type { get; set; }
    }
}
