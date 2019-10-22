﻿using System;

namespace Domain
{
    public interface IValueObject : IDomain
    {
        string Name { get; set; }
    }

    public class ValueObject : IValueObject
    {
        public long Id { get; set; }
        
        public string Name { get; set; }

        public object GetId() => Id;

        public bool IsNew => Id == 0;

        public DateTime CreatedDate { get; set; }

        public byte[] RowVersion { get; set; }
    }
}