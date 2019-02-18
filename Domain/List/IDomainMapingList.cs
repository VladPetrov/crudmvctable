using System.Collections.Generic;

namespace Domain.List
{
    public interface IDomainMapingList<out T> : IEnumerable<T> where T : DomainBase
    {
    }
}