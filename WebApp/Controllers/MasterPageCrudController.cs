using BLL.Infrastructure;
using Domain;

namespace WebApp.Controllers
{
    public abstract class MasterPageCrudController<TDto, TDomain> : GenericCrudController<TDto, TDomain>
        where TDto : DomainBase
        where TDomain : DomainBase, new()
    {
        protected MasterPageCrudController(IGenericCrudService<TDto, TDomain> service) : base(service, false)
        {
        }
    }
}
