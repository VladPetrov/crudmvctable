using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class SubMessage : EntityBase
    {
        public string Text { get; set; }

        public bool IsViewed { get; set; }

        public int Number { get; set; }

        [ForeignKey(nameof(Message))]
        public long MessageId { get; set; }

        public virtual Message Message { get; set; }
    }
}