using System.Collections;
using System.Collections.Generic;

namespace Domain.List
{
    public class DomainMappingList<T> : IDomainMapingList<T> where T : DomainBase
    {
        public DomainMappingList(List<T> list)
        {
            List = list;
        }

        private List<T> List { get; }

        public IEnumerator<T> GetEnumerator()
        {
            return List.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return List.GetEnumerator();
        }
    }
}