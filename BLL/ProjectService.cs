using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Project;

namespace BLL
{
    public class ProjectService : GenericCrudServise<ProjectDto, ProjectDomain>, IProjectService
    {
        public ProjectService(IProjectRepository repository) : base(repository)
        {
        }
    }
}
