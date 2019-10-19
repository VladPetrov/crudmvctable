using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class ClientDeliveryAddress : EntityBaseWithStrKey
    {
        [Key]
        [ForeignKey(nameof(Profile))]
        public new string Id { get; set; }
        
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
