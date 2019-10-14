using Domain.Category;

namespace DAL.Infrastructure
{
    public interface ISubCategoryRepository : IGenericCrudRepository<SubCategoryDisplay, SubCategoryDomain, long>
    {
    }
}
