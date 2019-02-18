using System.Collections.Generic;

namespace DAL.Model
{
    public class Category : EntityBase
    {
        public string Name { get; set; }

        public virtual List<SubCategory> Categories { get; set; } = new List<SubCategory>();
    }
}
