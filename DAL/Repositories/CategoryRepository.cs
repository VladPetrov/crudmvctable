using DAL.Infrastructure;
using DAL.Model;
using Domain.Category;

namespace DAL.Repositories
{
    public class CategoryRepository : GenericCrudRepository<DataBase, Category, CategoryDisplay, CategoryDomain>, ICategoryRepository
    {
        public CategoryRepository(DataBase context) : base(context)
        {
        }
    }
}
