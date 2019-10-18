using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Client
{
    public class ClientFirmDisplay : IDomain<string>, IChildEntity<string>
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
