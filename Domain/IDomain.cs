﻿using System;

namespace Domain
{
    public interface IDomainBase
    {
        object GetId();
    }

    public interface IDomain<TKey> : IDomainBase
    {
        TKey Id { get; set; }
        bool IsNew { get; }
        DateTime CreatedDate { get; set; }
        byte[] RowVersion { get; set; }
    }
}