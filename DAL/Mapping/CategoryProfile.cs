using AutoMapper;
using DAL.Model;
using Domain;
using Domain.Category;

namespace DAL.Mapping
{
    public class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<Category, CategoryDisplay>();

            CreateMap<Category, CategoryDomain>();

            CreateMap<CategoryDomain, Category>()
                .ForMember(x => x.Categories, opt => opt.Ignore());

            CreateMap<Category, ValueObject>();

            CreateMap<SubCategory, SubCategoryDisplay>()
                .ForMember(x => x.MusterEntityFk, opt => opt.MapFrom(x => x.CategoryId));

            CreateMap<SubCategory, SubCategoryDomain>()
                .ForMember(x => x.MusterEntityFk, opt => opt.MapFrom(x => x.CategoryId));

            CreateMap<SubCategoryDomain, SubCategory>()
                .ForMember(x => x.CategoryId, opt => opt.MapFrom(x => x.MusterEntityFk))
                .ForMember(x => x.Category, opt => opt.Ignore());
        }
    }
}
