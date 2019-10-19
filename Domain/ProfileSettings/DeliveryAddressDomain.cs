using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.ProfileSettings
{
    public class DeliveryAddressDomain : DomainBaseWithStrKey
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string StreetAndNumber { get; set; }

        [Required]
        public string City { get; set; }

        public ValueObject Country { get; set; }
    }
}
