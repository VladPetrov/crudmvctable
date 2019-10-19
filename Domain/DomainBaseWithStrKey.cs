using System;

namespace Domain
{
    public abstract class DomainBaseWithStrKey : IDomain<string>
    {
        public string Id { get; set; }

        public bool IsNew => Id == null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        public byte[] RowVersion { get; set; }

        public object GetId() => Id;
    }
}