using System.ComponentModel.DataAnnotations;

namespace Domain.ProfileSettings
{
    public class NotificationsDomain : DomainBaseWithStrKey
    {
        [EmailAddress]
        [Display(Name = "E-mail notification to another e-mail")]
        public string NotificationEmail { get; set; }

        [Display(Name = "Send notifications")]
        public bool SendNotificationsToEmail { get; set; }

        [Display(Name = "Firm")]
        public string FirmName { get; set; }
    }
}
