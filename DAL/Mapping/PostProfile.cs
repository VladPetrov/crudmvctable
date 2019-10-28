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

            CreateMap<FirmPost, PostDto>()
                .ForMember(x => x.DeliveredDate, opt => opt.MapFrom(x => x.DeliveredDate))
                .ForMember(x => x.RecipientFirm, opt => opt.MapFrom(x => x.Firm.Name))
                .ForMember(x => x.RecipientFirm, opt => opt.MapFrom(x => x.Firm.Name))
                .ForMember(x => x.ClientName, opt => opt.MapFrom(x => x.Firm.Profile.DeliveryAddress.Name))
                .ForMember(x => x.ClientName, opt => opt.MapFrom(x => x.Firm.Profile.DeliveryAddress.Name))
                .ForMember(x => x.StreetAndNumber,opt => opt.MapFrom(x => x.Firm.Profile.DeliveryAddress.StreetAndNumber))
                .ForMember(x => x.PostalCode, opt => opt.MapFrom(x => x.Firm.Profile.DeliveryAddress.PostalCode))
                .ForMember(x => x.City, opt => opt.MapFrom(x => x.Firm.Profile.DeliveryAddress.City))
                .ForMember(x => x.Country, opt => opt.MapFrom(x => x.Firm.Profile.DeliveryAddress.Country.Name));
        }
    }
}
