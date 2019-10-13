using System.Collections.Generic;

namespace Domain.Category
{
    public class SubCategoryDisplay : DomainBase, IChildEntity<long>
    {
        public string Name { get; set; }

        public long MusterEntityFk { get; set; }
    }
}
