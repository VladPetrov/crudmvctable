using Common.Table;
using Domain;
using Domain.DeleteResult;

namespace BLL.Infrastructure
{
    public interface IGenericCrudService<TDto, TDomain>
        where TDto : DomainBase
        where TDomain : DomainBase
    {
        ListResult<TDto> List(ListRequest request);

        OperationResult<TDomain> GetById(long id);

        UpsertResult<TDomain> Upsert(TDomain domain);

        OperationResult<DeleteResult> Delete(long id);
    }
}
