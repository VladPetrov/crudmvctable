using BLL.Infrastructure;
using Common.StringConstants;
using Domain.Post;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;
using WebApp.Model.GenericMvc;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    [SetAvailableTableActions(TableActions.Add, TableActions.Details, TableActions.Edit, TableActions.Delete)]
    public class PostController : MasterPageCrudController<PostDisplay, PostDomain, string>
    {
        public PostController(IPostService service) : base(service)
        {
        }

        protected override string Title => "Post";

        protected override int ItemsPerPage => 100;

        protected override IActionResult RedirectAfterCreate(string id)
        {
            return RedirectToAction(nameof(IndexPage)); 
        }
    }
}
