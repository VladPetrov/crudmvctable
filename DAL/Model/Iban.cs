using Domain.Entity;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class Iban : EntityBase
    {
        public string IbanStr { get; set; }

        public Currency Currency { get; set; }

        public string Bank { get; set; }

        public string Swift { get; set; }

        [ForeignKey(nameof(Entity))]
        public long EntityId { get; set; }

        public virtual Entity Entity { get; set; }
    }
}
