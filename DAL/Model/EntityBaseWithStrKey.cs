using System;
using System.ComponentModel.DataAnnotations;
using DAL.Infrastructure;

namespace DAL.Model
{
    public abstract class EntityBaseWithStrKey : IEntity<string>
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }

        public bool IsNew => Id == null;
    }
}