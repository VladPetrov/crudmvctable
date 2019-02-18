using System.ComponentModel.DataAnnotations;

namespace WebApp.Model.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
