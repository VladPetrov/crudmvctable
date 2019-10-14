
namespace Domain.Message
{
    public class SubMessageDisplay : DomainBase, IChildEntity<long>
    {
        public string Text { get; set; }
        public bool IsViewed { get; set; }
        public int Number { get; set; }
        public long MusterEntityFk { get; set; }
    }
}
