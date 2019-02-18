using System.ComponentModel.DataAnnotations;
using Domain.FileParser;

namespace Domain.Category
{
    public class CategoryFileRecordModel : FileRecordBase
    {
        [Display(Name = "Main category")]
        public string Category { get; set; }

        [Display(Name = "Sub category")]
        public string SubCategory { get; set; }
    }
}
