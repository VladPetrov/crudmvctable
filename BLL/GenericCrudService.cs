using BLL.Infrastructure;
using Common.Table;
using DAL.Infrastructure;
using Domain;
using Domain.DeleteResult;

namespace BLL
{
    public abstract class GenericCrudService<TDisplay, TDomain, TKey> : IGenericCrudService<TDisplay, TDomain, TKey>
        where TDisplay : IDomain<TKey>
        where TDomain : IDomain<TKey>

    {
        protected IGenericCrudRepository<TDisplay, TDomain, TKey> Repository { get; }

        protected GenericCrudService(IGenericCrudRepository<TDisplay, TDomain, TKey> repository)
        {
            Repository = repository;
        }

        public virtual ListResult<TDisplay> List(ListRequest request)
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
