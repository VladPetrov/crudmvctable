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
                .ForMember(x => x.ContractEndDate, opt => opt.MapFrom(x => x.ClientProfile.ContractEndDate))
                .ForMember(x => x.Companies, opt => opt.Ignore()); //todo
        }
    }
}
