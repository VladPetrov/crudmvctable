using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    [Display(Name = "Client")]
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
        
        [ForeignKey(nameof(Profile))]
        public string ProfileId { get; set; }

        public virtual ClientProfile Profile { get; set; }
    }
}
