using System;

namespace Domain
{
    public class ValueObjectStrKey : IValueObject<string>
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public object GetId() => Id;

        public bool IsNew => Id == null;

        public DateTime CreatedDate { get; set; }

        public byte[] RowVersion { get; set; }
    }
}