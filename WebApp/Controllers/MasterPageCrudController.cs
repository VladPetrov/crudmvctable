using BLL.Infrastructure;
using Domain;

namespace WebApp.Controllers
{
    public abstract class MasterPageCrudController<TDisplay, TDomain, TKey> : GenericCrudController<TDisplay, TDomain, TKey>
        where TDisplay : IDomainBase<TKey>
        where TDomain : IDomainBase<TKey>, new()
    {
        protected MasterPageCrudController(IGenericCrudService<TDisplay, TDomain, TKey> service) : base(service, false)
        {
        }
    }
}
