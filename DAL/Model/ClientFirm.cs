using DAL.Infrastructure;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class ClientFirm : IEntity<string>
    {
        [Key]
        public string Id { get; set; }

        public bool IsNew => Id == null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }

        [Required]
        public string Name { get; set; }

        public bool Enabled { get; set; }

        [ForeignKey(nameof(Client))]
        public string ClientId { get; set; }

        public virtual ClientProfile Client { get; set; }
    }
}
