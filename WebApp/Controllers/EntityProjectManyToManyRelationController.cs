using BLL.Infrastructure;
using DAL.Model;

namespace WebApp.Controllers
{
    public class EntityProjectManyToManyRelationController : GenericManyToManyLeftController<DataBase, EntityProject, Entity, Project>
    {
        public EntityProjectManyToManyRelationController(IEntityProjectManyToManyServiceTr service) : base(service)
        {
        }

        protected override string Title => "Projects";
    }
}
