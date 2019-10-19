using System.ComponentModel.DataAnnotations;

namespace Domain.ProfileSettings
{
    public class DeliveryAddressDomain : DomainBaseWithStrKey
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Street and number")]
        public string StreetAndNumber { get; set; }

        [Required]
        [Display(Name = "Postal code (ZIP)")]
        public string PostalCode { get; set; }

        [Required]
        public string City { get; set; }

        public ValueObject Country { get; set; }
    }
}
