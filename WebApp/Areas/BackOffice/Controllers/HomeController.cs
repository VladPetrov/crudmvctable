using Microsoft.AspNetCore.Mvc;
using WebApp.Extensions;

namespace WebApp.Areas.BackOffice.Controllers
{
    public class HomeController : BackOfficeController
    {
        public IActionResult Index()
        {
            return RedirectToAction(nameof(PostController.Index), nameof(PostController).ToControllerName());
        }
    }
}