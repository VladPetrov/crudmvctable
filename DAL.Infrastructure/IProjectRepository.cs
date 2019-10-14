using Domain;
using Domain.Project;

namespace DAL.Infrastructure
{
    public interface IProjectRepository : IGenericCrudRepository<ProjectDto, ProjectDomain, long>
    {
        ValueObject FindProjectByPrefixInNote(string note);
    }
}
