using BLL.Infrastructure;
using Domain.Category;

namespace WebApp.Controllers
{
    public class SubCategoriesController : ChildPageCrudController<SubCategoryDisplay, SubCategoryDomain>
    {
        public SubCategoriesController(ISubCategoryService service) : base(service)
        {
        }

        protected override string Title => "Sub categories";
    }
}
