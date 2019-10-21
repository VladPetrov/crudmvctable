﻿using AutoMapper;
using DAL.Model;
using Domain.ProfileSettings;

namespace DAL.Mapping
{
    public class ProfileSettingsProfile : Profile
    {
        public ProfileSettingsProfile()
        {
            CreateMap<ClientDeliveryAddress, DeliveryAddressDomain>();
                
            CreateMap<DeliveryAddressDomain, ClientDeliveryAddress>()
                .ForMember(x => x.Country, opt => opt.Ignore())
                .ForMember(x => x.CountryId, opt => opt.MapFrom(x => x.Country.Id))
                .ForMember(x => x.Profile, opt => opt.Ignore());
                
            CreateMap<ClientAuthorizedPersons, AuthorizedPersonDomain>()
                .ReverseMap();

            CreateMap<ClientFirm, NotificationsDomain>()
                .ForMember(x => x.FirmName, opt => opt.MapFrom(x => x.Name));

            CreateMap<NotificationsDomain, ClientFirm>()
                .ForMember(x => x.Name, opt => opt.Ignore());
        }
    }
}