using Common.Table;
using Domain;
using Domain.DeleteResult;

namespace BLL.Infrastructure
{
    public interface IGenericCrudService<TDisplay, TDomain, in TKey>
        where TDisplay : IDomainBase<TKey>
        where TDomain : IDomainBase<TKey>
    {
        ListResult<TDisplay> List(ListRequest request);

        OperationResult<TDomain> GetById(TKey id);

        UpsertResult<TDomain> Upsert(TDomain domain);

        OperationResult<DeleteResult> Delete(TKey id);
    }
}
