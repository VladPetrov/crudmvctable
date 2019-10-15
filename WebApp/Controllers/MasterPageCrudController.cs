using BLL.Infrastructure;
using Domain;

namespace WebApp.Controllers
{
    public abstract class MasterPageCrudController<TDisplay, TDomain, TKey> : GenericCrudController<TDisplay, TDomain, TKey>
        where TDisplay : IDomain<TKey>
        where TDomain : IDomain<TKey>, new()
    {
        protected MasterPageCrudController(IGenericCrudService<TDisplay, TDomain, TKey> service) : base(service, false)
        {
        }
    }
}
