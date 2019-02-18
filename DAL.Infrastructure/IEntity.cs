using System;
using JetBrains.Annotations;

namespace DAL.Infrastructure
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public interface IEntity
    {
        long Id { get; set; }

        bool IsNew { get; }
        
        DateTime CreatedDate { get; set; } 
        
        DateTime? DeletedDate { get; set; }
        
        bool IsDeleted { get; set; }
    }
}