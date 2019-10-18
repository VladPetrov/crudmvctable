using System;


namespace Domain.Client
{
    public class FirmDisplay : IDomain<string>, IChildEntity<string>
    {
        public string Id { get; set; }

        public bool IsNew => Id != null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        public byte[] RowVersion { get; set; }

        public object GetId() => Id;

        public string Name { get; set; }

        public bool Enabled { get; set; }

        public string MusterEntityFk { get; set; }
    }
}
