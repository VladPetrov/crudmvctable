using Domain.Entity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DAL.Model
{
    public class Entity : EntityBase
    {
        public string  Name { get; set; }

        public string Acronym { get; set; }

        public EntityType Type { get; set; }

        public string Country { get; set; } //todo

        public string Address { get; set; } 

        [Display(Name = "Zip Code")]
        public string ZipCode { get; set; }

        public string City { get; set; }

        [Display(Name = "ID nr.")]
        public string IdNumber { get; set; }

        [Display(Name = "Tax nr.")]
        public string TaxNumber { get; set; }

        [Display(Name = "VAT nr.")]
        public string VatNumber { get; set; }
        
        public bool IsSupplier { get; set; }

        public virtual List<Iban> Ibans { get; set; } = new List<Iban>();
        
        public virtual List<EntityProject> Projects { get; set; } = new List<EntityProject>();
    }
}