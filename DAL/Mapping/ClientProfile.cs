﻿using System.Linq;
using AutoMapper;
using DAL.Model;
using Domain.Client;

namespace DAL.Mapping
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            CreateMap<ApplicationUser, ClientDisplay>()
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.ClientProfile.Name))
                .ForMember(x => x.Balance, opt => opt.MapFrom(x => x.ClientProfile.Balance))
                .ForMember(x => x.ContractStartDate, opt => opt.MapFrom(x => x.ClientProfile.ContractStartDate))
                .ForMember(x => x.ContractEndDate, opt => opt.MapFrom(x => x.ClientProfile.ContractEndDate));
            
            CreateMap<ClientDomain, ApplicationUser>()
                .ForMember(x => x.Id, opt => opt.Ignore())
                .ForMember(x => x.UserType, opt => opt.Ignore())
                .ForMember(x => x.UserName, opt => opt.MapFrom(x => x.Email))
                .ForPath(x => x.ClientProfile.Name, opt => opt.MapFrom(x => x.ClientName))
                .ForPath(x => x.ClientProfile.Balance, opt => opt.MapFrom(x => x.Balance))
                .ForPath(x => x.ClientProfile.ContractStartDate, opt => opt.MapFrom(x => x.ContractStartDate))
                .ForPath(x => x.ClientProfile.ContractEndDate, opt => opt.MapFrom(x => x.ContractEndDate))
                .ForPath(x => x.NormalizedUserName, opt => opt.Ignore())
                .ForPath(x => x.NormalizedEmail, opt => opt.Ignore())
                .ForPath(x => x.EmailConfirmed, opt => opt.Ignore())
                .ForPath(x => x.PasswordHash, opt => opt.Ignore())
                .ForPath(x => x.SecurityStamp, opt => opt.Ignore())
                .ForPath(x => x.ConcurrencyStamp, opt => opt.Ignore())
                .ForPath(x => x.PhoneNumberConfirmed, opt => opt.Ignore())
                .ForPath(x => x.TwoFactorEnabled, opt => opt.Ignore())
                .ForPath(x => x.LockoutEnd, opt => opt.Ignore())
                .ForPath(x => x.LockoutEnabled, opt => opt.Ignore())
                .ForPath(x => x.AccessFailedCount, opt => opt.Ignore());

            CreateMap<ApplicationUser, ClientDomain>()
                .ForMember(x => x.ClientName, opt => opt.MapFrom(x => x.ClientProfile.Name))
                .ForMember(x => x.Balance, opt => opt.MapFrom(x => x.ClientProfile.Balance))
                .ForMember(x => x.ContractStartDate, opt => opt.MapFrom(x => x.ClientProfile.ContractStartDate))
                .ForMember(x => x.ContractEndDate, opt => opt.MapFrom(x => x.ClientProfile.ContractEndDate))

                ;
        }
    }
}
