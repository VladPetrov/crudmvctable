using System;

namespace Domain
{
    public interface IDomain
    {
        object GetId();
    }

    public interface IDomain<TKey> : IDomain
    {
        TKey Id { get; set; }
        bool IsNew { get; }
        DateTime CreatedDate { get; set; }
        byte[] RowVersion { get; set; }
    }
}