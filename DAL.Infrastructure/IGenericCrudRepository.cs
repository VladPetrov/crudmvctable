using Common.Table;
using Domain;
using Domain.DeleteResult;

namespace DAL.Infrastructure
{
    public interface IGenericCrudRepository<TDto, TDomain>
        where TDto    : DomainBase
        where TDomain : DomainBase
    {
        ListResult<TDto> List(ListRequest request);

        TDomain GetById(long id);

        UpsertResult<TDomain> Upsert(TDomain domain);

        DeleteResult Delete(long id);
    }
}
