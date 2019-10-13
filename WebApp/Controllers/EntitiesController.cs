using BLL.Infrastructure;
using Domain.Entity;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [SetAvailableTableActions(TableActions.Add, TableActions.Delete, TableActions.Details, TableActions.Edit)]
    public class EntitiesController : MasterPageCrudController<EntityDisplay, EntityDomain, long>
    {
        public EntitiesController(IEntityService service) : base(service)
        {
        }

        protected override string Title => "Entities";
    }
}
