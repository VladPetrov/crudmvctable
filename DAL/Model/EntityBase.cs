using DAL.Infrastructure;
using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Model
{
    public abstract class EntityBase : IEntity<long>
    {
        protected EntityBase()
        {
            CreatedDate = DateTime.UtcNow;
        }

        [Key]
        public long Id { get; set; }
        
        [Required]
        public DateTime CreatedDate { get; set; }
        
        [Timestamp]
        public byte[] RowVersion { get; set; }
        
        public bool IsNew => Id == 0;
    }
}