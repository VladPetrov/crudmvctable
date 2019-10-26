using Microsoft.AspNetCore.Mvc;


namespace WebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("Index", "Post", new{Area = "BackOffice"});
        }
    }
}