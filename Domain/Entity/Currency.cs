using System.ComponentModel.DataAnnotations;

namespace Domain.Entity
{
    public enum Currency
    {
        [Display(Name = "EUR")]
        Eur,

        [Display(Name = "HUF")]
        Huf
    }
}
