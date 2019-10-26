using Microsoft.AspNetCore.Mvc;
using WebApp.Extensions;

namespace WebApp.Areas.Client.Controllers
{
    public class HomeController : ClientController
    {
        public IActionResult Index()
        {
            return RedirectToAction(nameof(InboxController.Index), nameof(InboxController).ToControllerName());
        }
    }
}