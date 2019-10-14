using BLL.Infrastructure;
using Domain;

namespace WebApp.Controllers
{
    public abstract class MasterPageCrudController<TDto, TDomain, TKey> : GenericCrudController<TDto, TDomain, TKey>
        where TDto : IDomainBase<TKey>
        where TDomain : IDomainBase<TKey>, new()
    {
        protected MasterPageCrudController(IGenericCrudService<TDto, TDomain, TKey> service) : base(service, false)
        {
        }
    }
}
