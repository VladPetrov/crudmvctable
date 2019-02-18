using System.ComponentModel.DataAnnotations;


namespace WebApp.Model.UsersPanel
{
    public class ChangePasswordModel
    {
        [Required]
        public string Id { get; set; }
        
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        public string NewPassword { get; set; }
        
        public string StatusMessage { get; set; }
    }
}
