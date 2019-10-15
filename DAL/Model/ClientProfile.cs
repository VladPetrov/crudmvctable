using DAL.Infrastructure;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class ClientProfile : IEntity<string>
    {
        [Key]
        [ForeignKey(nameof(User))]
        public string Id { get; set; }

        public bool IsNew => Id != null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }

        public long Balance { get; set; }

        public DateTime ContractStartDate { get; set; }

        public DateTime ContractEndDate { get; set; }

        public virtual ApplicationUser User { get; set; }

        public virtual ClientDeliveryAddress DeliveryAddress { get; set; }

        public virtual ClientAuthorizedPersons AuthorizedPersons { get; set; }
    }
}
