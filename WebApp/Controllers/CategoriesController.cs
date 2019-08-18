using BLL.Infrastructure;
using Domain.Category;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [SetAvailableTableActions(TableActions.Add, TableActions.Delete, TableActions.Details, TableActions.Edit)]
    public class CategoriesController : MasterPageCrudController<CategoryDisplay, CategoryDomain>
    {
        public CategoriesController(ICategoryService service) : base(service)
        {
        }

        protected override string Title => "Categories";
    }
}
