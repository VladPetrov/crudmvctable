using DAL.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class ClientProfile : EntityBaseWithStrKey
    {
        [Key]
        [ForeignKey(nameof(User))]
        public new string Id { get; set; }
        
        [Required]
        public string DefaultFirmName { get; set; }

        public long Balance { get; set; }

        public DateTime ContractStartDate { get; set; }

        public DateTime ContractEndDate { get; set; }

        public virtual ApplicationUser User { get; set; }

        public virtual ClientDeliveryAddress DeliveryAddress { get; set; } 

        public virtual ClientAuthorizedPersons AuthorizedPersons { get; set; }

        public virtual List<ClientFirm> Firms { get; set; } = new List<ClientFirm>();
    }
}
