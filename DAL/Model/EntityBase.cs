﻿using DAL.Infrastructure;
using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Model
{
    public abstract class EntityBase : IEntity<long>
    {
        [Key]
        public long Id { get; set; }
        
        [Required]
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }
        
        public bool IsNew => Id == 0;
    }
}