using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Project;

namespace BLL
{
    public class ProjectService : GenericCrudService<ProjectDto, ProjectDomain, long>, IProjectService
    {
        public ProjectService(IProjectRepository repository) : base(repository)
        {
        }
    }
}
