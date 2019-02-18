using System.ComponentModel.DataAnnotations;

namespace Domain.Entity
{
    public enum EntityType
    {
        Corporation,

        [Display(Name = "Non-Profit")]
        NonProfit
    }
}
