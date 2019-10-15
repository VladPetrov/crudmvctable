using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.Client
{
    public class ClientDomain : IDomain<string>
    {
        public string Id { get; set; }

        public bool IsNew => Id != null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        public byte[] RowVersion { get; set; }

        public object GetId() => Id;

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Range(0, long.MaxValue)]
        public long Balance { get; set; }
        
        public DateTime ContractStartDate { get; set; }

        public DateTime ContractEndDate { get; set; }
    }
}
