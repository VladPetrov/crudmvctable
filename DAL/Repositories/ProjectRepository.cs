using AutoMapper.QueryableExtensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.Project;
using System.Linq;

namespace DAL.Repositories
{
    public class ProjectRepository : GenericCrudRepository<DataBase, Project, ProjectDto, ProjectDomain>, IProjectRepository
    {
        public ProjectRepository(DataBase context) : base(context)
        {
        }

        public ValueObject FindProjectByPrefixInNote(string prefix)
        {
            if (string.IsNullOrEmpty(prefix))
            {
                return null;
            }

            var maxLength = GetMaxLengthOfAcronym();
            
            if (string.IsNullOrEmpty(prefix) || prefix?.Length > maxLength)
            {
                return null;
            }

            return Context.Projects.Where(x => x.Acronym.ToLower() == prefix).ProjectTo<ValueObject>().FirstOrDefault();
        }

        private int GetMaxLengthOfAcronym()
        {
            return Set.Max(x => x.Acronym.Length);
        }
    }
}