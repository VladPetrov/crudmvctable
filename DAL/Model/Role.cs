
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using JetBrains.Annotations;

namespace DAL.Model
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    [SuppressMessage("ReSharper", "ClassWithVirtualMembersNeverInherited.Global")]
    public class Role : EntityBase
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        [SuppressMessage("ReSharper", "VirtualMemberCallInConstructor")]
        public Role()
        {
            Users = new List<ApplicationUserRole>();
            RolePermissions = new List<RolePermission>();
        }

        [Required]
        public bool Active { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public bool IsAdministrative { get; set; }

        [Required]
        public bool CanEdit { get; set; }
        
        [Required]
        public bool IsBuiltIn { get; set; }

        public virtual ICollection<ApplicationUserRole> Users { get; set; }

        public virtual ICollection<RolePermission> RolePermissions { get; set; }
    }
}
