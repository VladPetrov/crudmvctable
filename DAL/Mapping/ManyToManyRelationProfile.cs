using AutoMapper;
using Domain;
using Domain.ManyToManyService;

namespace DAL.Mapping
{
    public class ManyToManyRelationProfile : Profile
    {
        public ManyToManyRelationProfile()
        {
            CreateMap<ValueObject, ManyToManyRelationItemVm>()
                .ForMember(x => x.IsSelected, opt => opt.Ignore());
        }
    }
}
