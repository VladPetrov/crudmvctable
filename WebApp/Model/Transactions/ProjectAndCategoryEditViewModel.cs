using System.ComponentModel.DataAnnotations;

namespace WebApp.Model.Transactions
{
    public class ProjectAndCategoryEditViewModel
    {
        [Required]
        [Display(Name = "Project")]
        public long ProjectId { get; set; }

        [Required]
        [Display(Name = "Category")]
        public long CategoryId { get; set; }
    }
}
