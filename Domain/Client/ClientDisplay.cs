﻿using System;
using System.Collections.Generic;

namespace Domain.Client
{
    public class ClientDisplay : IDomain<string>
    {
        public string Id { get; set; }

        public bool IsNew => Id != null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        public byte[] RowVersion { get; set; }

        public object GetId() => Id;

        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }

        public string Name { get; set; }

        public long Balance { get; set; }

        public DateTime ContractStartDate { get; set; }

        public DateTime ContractEndDate { get; set; }
    }
}
