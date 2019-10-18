using BLL.Infrastructure;
using Domain;

namespace WebApp.Controllers
{
    public abstract class ChildPageCrudController<TDisplay, TDomain, TKey> : GenericCrudController<TDisplay, TDomain, TKey>
        where TDisplay : IDomain<TKey>, IChildEntity<TKey>
        where TDomain : IDomain<TKey>, IChildEntity<TKey>, new()
    {
        protected ChildPageCrudController(IGenericCrudService<TDisplay, TDomain, TKey> service) : base(service, true)
        {
        }
    }
}