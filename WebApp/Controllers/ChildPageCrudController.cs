using BLL.Infrastructure;
using Domain;

namespace WebApp.Controllers
{
    public abstract class ChildPageCrudController<TDto, TDomain, TKey> : GenericCrudController<TDto, TDomain, TKey>
        where TDto : IDomainBase<TKey>, IChildEntity<TKey>
        where TDomain : IDomainBase<TKey>, IChildEntity<TKey>, new()
    {
        protected ChildPageCrudController(IGenericCrudService<TDto, TDomain, TKey> service) : base(service, true)
        {
        }
    }
}