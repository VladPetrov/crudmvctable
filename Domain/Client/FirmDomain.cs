using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Client
{
    public class FirmDomain : DomainBaseWithStrKey, IChildEntity<string>
    {
        [Required]
        public string Name { get; set; }

        public bool Enabled { get; set; } = true;

        public string MusterEntityFk { get; set; }
    }
}
