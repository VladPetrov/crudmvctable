using Microsoft.AspNetCore.Mvc;

namespace WebApp.Areas.BackOffice.Controllers
{
    public class HomeController : BackOfficeController
    {
        public IActionResult Index()
        {
            return RedirectToAction("Index", "Post");
        }
    }
}