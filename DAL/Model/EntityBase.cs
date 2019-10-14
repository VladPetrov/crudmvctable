using System;
using System.ComponentModel.DataAnnotations;
using AutoMapper;
using DAL.Infrastructure;

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

        [IgnoreMap]
        public DateTime? DeletedDate { get; set; }

        [IgnoreMap]
        [Required]
        public virtual bool IsDeleted { get; set; }

        [Required]
        private string _guid;
        public string Guid
        {
            set => _guid = value;

            get => _guid ?? (_guid = System.Guid.NewGuid().ToString());
        }
        
        [Timestamp]
        public byte[] RowVersion { get; set; }
        
        public bool IsNew => Id == 0;
    }
}