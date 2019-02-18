using AutoMapper;
using DAL.Model;
using Domain;
using Domain.Files;

namespace DAL.Mapping
{
    public class FileProfile : Profile
    {
        public FileProfile()
        {
            CreateMap<File, FileDomain>();

            CreateMap<FileDomain, File>()
                .ForMember(x => x.BinaryData, opt => opt.Ignore());

            CreateMap<File, ValueObject>()
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.FileName));

            CreateMap<BinaryData, BinaryDataDomain>();
        }
    }
}
