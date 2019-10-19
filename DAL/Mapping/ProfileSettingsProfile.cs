using AutoMapper;
using DAL.Model;
using Domain.ProfileSettings;

namespace DAL.Mapping
{
    public class ProfileSettingsProfile : Profile
    {
        public ProfileSettingsProfile()
        {
            CreateMap<ClientDeliveryAddress, DeliveryAddressDomain>().ReverseMap();

            CreateMap<ClientAuthorizedPersons, AuthorizedPersonDomain>().ReverseMap();
        }
    }
}
