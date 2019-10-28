using BLL.Infrastructure;
using Common.StringConstants;
using Domain.Post;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;
using WebApp.Model.GenericMvc;
using WebApp.Model.Post;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    [Authorize(Roles = RoleNames.BackOffice)]
    [SetAvailableTableActions(TableActions.Add, TableActions.Details, TableActions.Edit, TableActions.Delete)]
    public class PostController : MasterPageCrudController<PostDisplay, PostDomain, string>
    {
        private IPostDataExportService ExportService { get; }

        public PostController(IPostService service, IPostDataExportService exportService) : base(service)
        {
            ExportService = exportService;
        }

        protected override string Title => "Post";

        protected override int ItemsPerPage => 100;

        [HttpPost]
        public IActionResult Export([FromBody] PostExportRequest request)
        {
            var pdfFile = ExportService.ExportPost(request.Ids, User.Identity.GetUserName());

            return File(pdfFile.Content, pdfFile.ContentType, pdfFile.Name);
        }

        protected override IActionResult RedirectAfterCreate(string id)
        {
            return RedirectToAction(nameof(IndexPage)); 
        }
    }
}
