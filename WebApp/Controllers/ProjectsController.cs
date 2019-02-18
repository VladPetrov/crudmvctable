using BLL.Infrastructure;
using Domain.Project;

namespace WebApp.Controllers
{
    public class ProjectsController : MasterPageCrudController<ProjectDto, ProjectDomain>
    {
        public ProjectsController(IProjectService service) : base(service)
        {
        }

        protected override string Title => "Projects";
    }
}
