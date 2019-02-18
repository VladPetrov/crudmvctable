using BLL.Infrastructure;
using Domain.Category;

namespace WebApp.Controllers
{
    public class CategoriesController : MasterPageCrudController<CategoryDisplay, CategoryDomain>
    {
        public CategoriesController(ICategoryService service) : base(service)
        {
        }

        protected override string Title => "Categories";
    }
}
