using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class ClientFirm : EntityBaseWithStrKey
    {
        public ClientFirm()
        {
            Id = Guid.NewGuid().ToString();
        }
        
        [Required]
        public string Name { get; set; }

        public bool Enabled { get; set; }

        [ForeignKey(nameof(Profile))]
        public string ProfileId { get; set; }

        public virtual ClientProfile Profile { get; set; }
    }
}
