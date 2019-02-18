using Domain.Entity;

namespace Domain.Iban
{
    public class IbanDisplay : DomainBase, IChildEntity
    {
        public string IbanStr { get; set; }

        public Currency Currency { get; set; }

        public string Bank { get; set; }

        public string Swift { get; set; }

        public long MusterEntityFk { get; set; }
    }
}
