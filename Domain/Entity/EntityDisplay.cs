using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entity
{
    public class EntityDisplay : DomainBase
    {
        public string Name { get; set; }

        public string Acronym { get; set; }

        public EntityType Type { get; set; }

        public string Country { get; set; } 

        public string Address { get; set; }

        //[Display(Name = "Zip Code")]
        public string ZipCode { get; set; }

        public string City { get; set; }

        //[Display(Name = "ID nr.")]
        public string IdNumber { get; set; }

        //[Display(Name = "Tax nr.")]
        public string TaxNumber { get; set; }

        //[Display(Name = "VAT nr.")]
        public string VatNumber { get; set; }

        public bool IsSupplier { get; set; }
    }
}
