using BLL.Infrastructure;
using Domain.Category;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [SetAvailableTableActions(TableActions.Add, TableActions.Delete, TableActions.Details, TableActions.Edit)]
    public class SubCategoriesController : ChildPageCrudController<SubCategoryDisplay, SubCategoryDomain, long>
    {
        public SubCategoriesController(ISubCategoryService service) : base(service)
        {
        }

        protected override string Title => "Sub categories";
    }
}
