using Domain.Project;

namespace BLL.Infrastructure
{
    public interface IProjectService : IGenericCrudService<ProjectDto, ProjectDomain>
    {
    }
}
