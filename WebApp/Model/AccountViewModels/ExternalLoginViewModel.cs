using System.ComponentModel.DataAnnotations;

namespace WebApp.Model.AccountViewModels
{
    public class ExternalLoginViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
