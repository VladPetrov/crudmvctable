using AutoMapper;
using DAL.Model;
using Domain.Post;

namespace DAL.Mapping
{
    public class PostProfile : Profile
    {
        public PostProfile()
        {
            CreateMap<FirmPost, PostDisplay>()
                .ForMember(x => x.Recipient, opt => opt.MapFrom(x => x.Firm.Name))
                .ForMember(x => x.RecipientFirmId, opt => opt.MapFrom(x => x.FirmId));

            CreateMap<FirmPost, PostDomain>()
                .ForMember(x => x.Recipient, opt => opt.MapFrom(x => x.Firm));

            CreateMap<PostDomain, FirmPost>()
                .ForMember(x => x.Firm, opt => opt.Ignore())
                .ForMember(x => x.FirmId, opt => opt.MapFrom(x => x.Recipient.Id));
        }
    }
}
