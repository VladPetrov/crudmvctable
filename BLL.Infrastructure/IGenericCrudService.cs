using Common.Table;
using Domain;
using Domain.DeleteResult;

namespace BLL.Infrastructure
{
    public interface IGenericCrudService<TDto, TDomain, TKey>
        where TDto : IDomainBase<TKey>
        where TDomain : IDomainBase<TKey>
    {
        ListResult<TDto> List(ListRequest request);

        OperationResult<TDomain> GetById(TKey id);

        UpsertResult<TDomain> Upsert(TDomain domain);

        OperationResult<DeleteResult> Delete(TKey id);
    }
}
