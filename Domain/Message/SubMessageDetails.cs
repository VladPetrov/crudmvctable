using System.ComponentModel.DataAnnotations;


namespace Domain.Message
{
    public class SubMessageDetails : DomainBase, IChildEntity<long>
    {
        [Required]
        public string Text { get; set; }
        public bool IsViewed { get; set; }
        public int Number { get; set; }
        public long MusterEntityFk { get; set; }
    }
}
