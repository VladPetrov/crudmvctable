using System;

namespace Domain
{
    public interface IValueObject<T> : IDomain<T>
    {
        string Name { get; set; }
    }

    public class ValueObject : IValueObject<long>
    {
        public long Id { get; set; }
        
        public string Name { get; set; }

        public object GetId() => Id;

        public bool IsNew => Id == 0;

        public DateTime CreatedDate { get; set; }

        public byte[] RowVersion { get; set; }
    }
}