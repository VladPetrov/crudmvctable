using System.ComponentModel.DataAnnotations;
using JetBrains.Annotations;

namespace Domain
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public interface IChangeType
    {
        long Id { get; set; }

        [Required]
        [EnumDataType(typeof(ChangeType))]
        ChangeType ChangeType { get; set; }
    }
}