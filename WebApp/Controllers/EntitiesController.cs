using BLL.Infrastructure;
using Domain.Entity;

namespace WebApp.Controllers
{
    public class EntitiesController : MasterPageCrudController<EntityDisplay, EntityDomain>
    {
        public EntitiesController(IEntityService service) : base(service)
        {
        }

        protected override string Title => "Entities";
    }
}
