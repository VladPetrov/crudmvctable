using BLL.Infrastructure;
using DAL.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [SetAvailableTableActions(TableActions.Add, TableActions.Delete, TableActions.Details, TableActions.Edit)]
    public class EntityProjectManyToManyRelationController : GenericManyToManyLeftController<DataBase, EntityProject, Entity, Project>
    {
        public EntityProjectManyToManyRelationController(IEntityProjectManyToManyServiceTr service) : base(service)
        {
        }

        protected override string Title => "Projects";
    }
}
