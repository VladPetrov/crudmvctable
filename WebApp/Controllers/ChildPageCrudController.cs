using BLL.Infrastructure;
using Domain;

namespace WebApp.Controllers
{
    public abstract class ChildPageCrudController<TDto, TDomain> : GenericCrudController<TDto, TDomain>
        where TDto : DomainBase, IChildEntity
        where TDomain : DomainBase, IChildEntity, new()
    {
        protected ChildPageCrudController(IGenericCrudService<TDto, TDomain> service) : base(service, true)
        {
        }
    }
}