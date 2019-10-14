using AutoMapper;
using DAL.Model;
using Domain;
using Domain.Project;

namespace DAL.Mapping
{
    public class ProjectProfile : Profile
    {
        public ProjectProfile()
        {
            CreateMap<Project, ProjectDomain>();

            CreateMap<Project, ProjectDto>();

            CreateMap<ProjectDomain, Project>()
                .ForMember(x => x.Entities, opt => opt.Ignore());

            CreateMap<ProjectFileRecordModel, Project>()
                .ForMember(x => x.Id, opt => opt.Ignore())
                .ForMember(x => x.CreatedDate, opt => opt.Ignore())
                .ForMember(x => x.RowVersion, opt => opt.Ignore())
                .ForMember(x => x.Entities, opt => opt.Ignore());

            CreateMap<Project, ValueObject>();
        }
    }
}
