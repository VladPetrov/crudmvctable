using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using JetBrains.Annotations;

namespace DAL.Model
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    [SuppressMessage("ReSharper", "ClassWithVirtualMembersNeverInherited.Global")]
    public class ApplicationUserRole : EntityBase, IManyToManyTable
    {
        [ForeignKey(nameof(Role))]
        public long? RoleId { get; set; }

        public virtual Role Role { get; set; }

        [ForeignKey(nameof(ApplicationUser))]
        public long? UserId { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }

        [NotMapped]
        public long? LinkedDataId
        {
            get => RoleId;
            set => RoleId = value;
        }
    }
}
