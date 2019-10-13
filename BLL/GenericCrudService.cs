using BLL.Infrastructure;
using Common.Table;
using DAL.Infrastructure;
using Domain;
using Domain.DeleteResult;

namespace BLL
{
    public abstract class GenericCrudServise<TDto, TDomain, TKey> : IGenericCrudService<TDto, TDomain, TKey>
        where TDto : IDomainBase<TKey>
        where TDomain : IDomainBase<TKey>

    {
        protected IGenericCrudRepository<TDto, TDomain, TKey> Repository { get; }

        protected GenericCrudServise(IGenericCrudRepository<TDto, TDomain, TKey> repository)
        {
            Repository = repository;
        }

        public virtual ListResult<TDto> List(ListRequest request)
        {
            return Repository.List(request);
        }

        public virtual OperationResult<TDomain> GetById(TKey id)
        {
            return OperationResult.Ok().SetData(Repository.GetById(id));
        }

        public virtual UpsertResult<TDomain> Upsert(TDomain domain)
        {
            return Repository.Upsert(domain);
        }

        public virtual OperationResult<DeleteResult> Delete(TKey id)
        {
            return Repository.Delete(id).ToOperationResult();
        }
    }
}
