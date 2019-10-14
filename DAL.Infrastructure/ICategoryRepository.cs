using Domain.Category;

namespace DAL.Infrastructure
{
    public interface ICategoryRepository : IGenericCrudRepository<CategoryDisplay, CategoryDomain, long>
    {
    }
}
