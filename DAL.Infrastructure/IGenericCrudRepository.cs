using Common.Table;
using Domain;
using Domain.DeleteResult;

namespace DAL.Infrastructure
{
    public interface IGenericCrudRepository<TDisplay, TDomain, in TKey>
        where TDisplay    : IDomain<TKey>
        where TDomain : IDomain<TKey>
    {
        ListResult<TDisplay> List(ListRequest request);

        TDomain GetById(TKey id);

        UpsertResult<TDomain> Upsert(TDomain domain);

        DeleteResult Delete(TKey id);
    }
}
