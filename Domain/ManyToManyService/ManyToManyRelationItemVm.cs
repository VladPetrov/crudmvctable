using System.Collections.Generic;

namespace Domain.ManyToManyService
{
    public class ManyToManyRelationItemVm
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public bool IsSelected { get; set; }
    }

    public class ManyToManyRelationVm
    {
        public long LeftEntityId { get; }

        public List<ManyToManyRelationItemVm> Items { get; } = new List<ManyToManyRelationItemVm>();

        public ManyToManyRelationVm(long leftEntityId, List<ManyToManyRelationItemVm> items)
        {
            LeftEntityId = leftEntityId;
            Items = items;
        }
    }
}
