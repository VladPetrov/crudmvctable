using AutoMapper;
using JetBrains.Annotations;

namespace Test.Table
{
    [UsedImplicitly]
    internal class TableMappingProfile : Profile
    {
        public TableMappingProfile()
        {
            CreateMap<User, UserDisplay>()
                .ForMember(x => x.Street, opt => opt.MapFrom(x => x.Adress.Street));
        }
    }
}
