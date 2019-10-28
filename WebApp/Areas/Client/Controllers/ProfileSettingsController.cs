using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Areas.Client.Controllers
{
    public class ProfileSettingsController : ClientController
    {
        [Route("Settings")]
        public IActionResult Index()
        {
            return View(null, User.Identity.GetUserId());
        }
    }
}
