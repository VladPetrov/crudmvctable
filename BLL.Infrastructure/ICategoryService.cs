using Domain.Category;

namespace BLL.Infrastructure
{
    public interface ICategoryService : IGenericCrudService<CategoryDisplay, CategoryDomain, long>
    {
    }
}
