using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Client
{
    public class ClientDisplay: DomainBaseWithStrKey
    {
        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }

        public string DefaultFirmName { get; set; }

        public long Balance { get; set; }

        public DateTime ContractStartDate { get; set; }

        public DateTime ContractEndDate { get; set; }
    }
}
