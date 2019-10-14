using System;
using JetBrains.Annotations;

namespace DAL.Infrastructure
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public interface IEntity<TKey>
    {
        TKey Id { get; set; }

        bool IsNew { get; }
        
        DateTime CreatedDate { get; set; }

        byte[] RowVersion { get; set; }
    }
}