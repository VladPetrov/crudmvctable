using System.Collections.Generic;
using JetBrains.Annotations;

namespace Domain.User
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class RoleDetails : RoleDisplay
    {
        public RoleDetails()
        {
            RolePermissions = new List<RolePermissionDetails>();
        }

        public ICollection<RolePermissionDetails> RolePermissions { get; set; }
    }
}