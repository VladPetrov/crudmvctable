using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.Infrastructure;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Areas.Client.Controllers
{
    public class InboxController : ClientController
    {
        private IClientInboxService Service { get; }

        public InboxController(IClientInboxService service)
        {
            Service = service;
        }
        
        [HttpGet]
        public IActionResult Index()
        {
            return View(Service.GetFirms(User.Identity.GetUserId()));
        }

        [HttpGet]
        public IActionResult FirmInbox(string firmId)
        {
            return PartialView(Service.GetLetters(firmId, User.Identity.GetUserId()));
        }
    }
}
