using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Areas.Client.Controllers
{
    public class ProfileSettingsController : ClientController
    {
        [Route("Settings")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
