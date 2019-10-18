using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Category;

namespace BLL
{
    public class SubCategoryService : GenericCrudService<SubCategoryDisplay, SubCategoryDomain, long>, ISubCategoryService
    {
        public SubCategoryService(ISubCategoryRepository repository) : base(repository)
        {
        }
    }
}
