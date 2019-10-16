using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DAL.Infrastructure;

namespace DAL.Model
{
    public class ClientDeliveryAddress : IEntity<string>
    {
        [Key]
        [ForeignKey(nameof(Profile))]
        public string Id { get; set; }

        public bool IsNew => Id == null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string StreetAndNumber { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        [ForeignKey(nameof(Country))]
        public long CountryId { get; set; }

        public virtual Country Country { get; set; }

        public virtual ClientProfile Profile { get; set; }
    }
}
