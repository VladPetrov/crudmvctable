using BLL.Infrastructure;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApp.Extensions;

namespace WebApp.Areas.Client.Controllers
{
    public class InboxController : ClientController
    {
        private IClientInboxService Service { get; }

        private string InboxTitle => "Inbox";
        private string ForwardedTitle => "Forwarded mail";

        public InboxController(IClientInboxService service)
        {
            Service = service;
        }
        
        [HttpGet]
        public IActionResult Index()
        {
            ViewData.SetPageTitle(InboxTitle);

            return View(Service.GetFirms(User.Identity.GetUserId()));
        }

        [HttpGet]
        public IActionResult FirmInbox(string firmId)
        {
            return PartialView(Service.GetLetters(firmId, User.Identity.GetUserId()));
        }

        [HttpGet]
        public IActionResult Forwarded()
        {
            ViewData.SetPageTitle(ForwardedTitle);

            return View(Service.GetForwarded(User.Identity.GetUserId()));
        }
    }
}
