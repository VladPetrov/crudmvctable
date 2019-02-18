using System;
using System.Collections.Generic;
using AutoMapper;
using DAL.Repositories;
using Domain.List;
using JetBrains.Annotations;

namespace Test.GenericInfrastructure
{
    [UsedImplicitly]
    internal class GenericInfrastructureMappingProfile : Profile
    {
        public GenericInfrastructureMappingProfile()
        {
            CreateMap<User, UserDomain>()
                .ForMember(x => x.Street, opt => opt.MapFrom(x => x.Adress.Street));

            CreateMap<UserDomain, User>()
                .ForMember(x => x.Adress, opt => opt.Ignore());
                
            CreateMap<AccountDomain, Account>();

            CreateMap<Account, AccountDomain>();

            CreateMap<User, Domain.ValueObject>()
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.FirstName));
        }
    }
}
