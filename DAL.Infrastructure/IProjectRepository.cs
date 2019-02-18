using Domain;
using Domain.Project;

namespace DAL.Infrastructure
{
    public interface IProjectRepository : IGenericCrudRepository<ProjectDto, ProjectDomain>
    {
        ValueObject FindProjectByPrefixInNote(string note);
    }
}
