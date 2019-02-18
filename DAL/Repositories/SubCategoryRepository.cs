using DAL.Infrastructure;
using DAL.Model;
using Domain.Category;

namespace DAL.Repositories
{
    public class SubCategoryRepository :  GenericCrudRepository<DataBase, SubCategory, SubCategoryDisplay, SubCategoryDomain>, ISubCategoryRepository
    {
        public SubCategoryRepository(DataBase context) : base(context)
        {
        }
    }
}
