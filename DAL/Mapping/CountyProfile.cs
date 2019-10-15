using AutoMapper;
using DAL.Model;
using Domain;

namespace DAL.Mapping
{
    public class CountyProfile : Profile
    {
        public CountyProfile()
        {
            CreateMap<Country, ValueObject>();
        }
    }
}
