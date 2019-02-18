using BLL.Infrastructure;
using Common.Table;
using DAL.Infrastructure;
using Domain;
using Domain.DeleteResult;

namespace BLL
{
    public abstract class GenericCrudServise<TDto, TDomain> : IGenericCrudService<TDto, TDomain>
        where TDto : DomainBase
        where TDomain : DomainBase

    {
        protected IGenericCrudRepository<TDto, TDomain> Repository { get; }

        protected GenericCrudServise(IGenericCrudRepository<TDto, TDomain> repository)
        {
            Repository = repository;
        }

        public virtual ListResult<TDto> List(ListRequest request)
        {
            return Repository.List(request);
        }

        public virtual OperationResult<TDomain> GetById(long id)
        {
            return OperationResult.Ok().SetData(Repository.GetById(id));
        }

        public virtual UpsertResult<TDomain> Upsert(TDomain domain)
        {
            return Repository.Upsert(domain);
        }

        public virtual OperationResult<DeleteResult> Delete(long id)
        {
            return Repository.Delete(id).ToOperationResult();
        }
    }
}
