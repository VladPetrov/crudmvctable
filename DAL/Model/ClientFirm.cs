using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Domain.Client;

namespace DAL.Model
{
    [Display(Name = "Firm")]
    public class ClientFirm : EntityBaseWithStrKey
    {
        public ClientFirm()
        {
            Id = Guid.NewGuid().ToString();
        }
        
        [Required]
        public string Name { get; set; }

        public bool Enabled { get; set; }

        public string NotificationEmail { get; set; }

        public bool SendNotificationsToEmail { get; set; } = true;

        public FirmType FirmType { get; set; } = FirmType.Additional;
        
        [ForeignKey(nameof(Profile))]
        public string ProfileId { get; set; }

        public virtual ClientProfile Profile { get; set; }

        public static ClientFirm CreateDefaultFirm(string name)
        {
            return new ClientFirm{Name = name, FirmType = FirmType.Default, Enabled = true};
        }
    }
}
