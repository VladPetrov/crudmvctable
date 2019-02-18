using System.Collections.Generic;
using AutoMapper;
using DAL.Repositories;
using Domain.List;

namespace DAL.Mapping
{
    public class DomainListProfile : Profile
    {
        public DomainListProfile()
        {
            CreateMap(typeof(DomainList<>), typeof(List<>)).ConvertUsing(typeof(DomainToEntityListMapper<,>));
            CreateMap(typeof(DomainList<>), typeof(ICollection<>)).ConvertUsing(typeof(DomainToEntityICollectionMapper<,>));


            CreateMap(typeof(List<>), typeof(DomainList<>)).ConvertUsing(typeof(EntityToDomainListMapper<,>));
            CreateMap(typeof(ICollection<>), typeof(DomainList<>)).ConvertUsing(typeof(EntityToDomainICollectionMapper<,>));
        }
    }
}
