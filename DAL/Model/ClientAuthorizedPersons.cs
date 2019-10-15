using DAL.Infrastructure;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class ClientAuthorizedPersons : IEntity<string>
    {
        [Key]
        [ForeignKey(nameof(Profile))]
        public string Id { get; set; }

        public bool IsNew => Id != null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }

        public string Person1 { get; set; }

        public string Person2 { get; set; }

        public string Person3 { get; set; }

        public virtual ClientProfile Profile { get; set; }
    }
}
