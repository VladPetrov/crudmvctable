using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Category;

namespace BLL
{
    public class CategoryService : GenericCrudService<CategoryDisplay, CategoryDomain, long>, ICategoryService
    {
        public CategoryService(ICategoryRepository repository) : base(repository)
        {
        }
    }
}
