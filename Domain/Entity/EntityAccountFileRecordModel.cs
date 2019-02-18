using Domain.FileParser;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entity
{
    public class EntityAccountFileRecordModel : FileRecordBase
    {
        public string Name { get; set; }

        public string Acronym { get; set; }

        public EntityType Type { get; set; }

        public string Country { get; set; } //todo

        [Display(Name = "Adress")]
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

        public string Bank { get; set; }

        [Display(Name = "SWIFT")]
        public string Swift { get; set; }

        [Required]
        [Display(Name = "IBAN")]
        public string Iban { get; set; }

        public Currency Currency { get; set; }

        public string Comment { get; set; }
    }
}
