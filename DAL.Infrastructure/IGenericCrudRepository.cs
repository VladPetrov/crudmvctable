using Common.Table;
using Domain;
using Domain.DeleteResult;

namespace DAL.Infrastructure
{
    public interface IGenericCrudRepository<TDto, TDomain, TKey>
        where TDto    : IDomainBase<TKey>
        where TDomain : IDomainBase<TKey>
    {
        ListResult<TDto> List(ListRequest request);

        TDomain GetById(TKey id);

        UpsertResult<TDomain> Upsert(TDomain domain);

        DeleteResult Delete(TKey id);
    }
}
