using System;
using System.ComponentModel.DataAnnotations;
using Common.Attributes;

namespace Domain.Client
{
    public class ClientDomain : DomainBaseWithStrKey
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Default Firm Name")]
        public string DefaultFirmName { get; set; }

        [Required]
        [Display(Name = "Phone Number")]
        public string PhoneNumber { get; set; }

        [Currency]
        [Range(0, long.MaxValue)]
        public long Balance { get; set; }

        [Display(Name = "Contract Start Date")]
        public DateTime ContractStartDate { get; set; }

        [Display(Name = "Contract End Date")]
        public DateTime ContractEndDate { get; set; }
    }
}
