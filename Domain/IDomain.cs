using System;

namespace Domain
{
    public interface IDomain
    {
        object GetId();
        bool IsNew { get; }
        DateTime CreatedDate { get; set; }
        byte[] RowVersion { get; set; }
    }

    public interface IDomain<TKey> : IDomain
    {
        TKey Id { get; set; }
    }
}