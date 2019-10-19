using System.ComponentModel.DataAnnotations;

namespace Domain.ProfileSettings
{
    public class AuthorizedPersonDomain : DomainBaseWithStrKey
    {
        [Display(Name = "Person 1")]
        public string Person1 { get; set; }

        [Display(Name = "Person 2")]
        public string Person2 { get; set; }

        [Display(Name = "Person 3")]
        public string Person3 { get; set; }
    }
}
