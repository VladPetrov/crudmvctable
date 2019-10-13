using BLL.Infrastructure;
using Domain.Project;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [SetAvailableTableActions(TableActions.Add, TableActions.Edit, TableActions.Delete, TableActions.Details)]
    public class ProjectsController : MasterPageCrudController<ProjectDto, ProjectDomain, long>
    {
        public ProjectsController(IProjectService service) : base(service)
        {
        }

        protected override string Title => "Projects";
    }
}
