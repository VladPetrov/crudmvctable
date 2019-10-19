namespace Domain.Client
{
    public class FirmDisplay : DomainBaseWithStrKey, IChildEntity<string>
    {
        public string Name { get; set; }

        public bool Enabled { get; set; }

        public string MusterEntityFk { get; set; }
    }
}
