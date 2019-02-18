using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using Domain.Permissions;
using JetBrains.Annotations;

namespace DAL.Model
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    [SuppressMessage("ReSharper", "ClassWithVirtualMembersNeverInherited.Global")]
    public class RolePermission : EntityBase
    {
        public RolePermission()
        {
        }

        public RolePermission(PermissionObject permissionObject, Permission permission)
        {
            Permission = permission;
            Object = permissionObject;
        }

        [Required]
        public bool Active { get; set; }

        [Required]
        public Permission Permission { get; set; }

        [Required]
        public PermissionObject Object { get; set; }

        [ForeignKey(nameof(Role))]
        public long? RoleId { get; set; }

        public virtual Role Role { get; set; }
    }
}
