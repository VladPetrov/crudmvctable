using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class SubCategory : EntityBase
    {
        public string Name { get; set; }

        [ForeignKey(nameof(Category))]
        public long CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }
}
