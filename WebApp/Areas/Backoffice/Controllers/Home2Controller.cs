using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Areas.Backoffice.Controllers
{
    //[Area("backoffice")]
    public class Home2Controller : Controller
    {
        public IActionResult Index()
        {
            return Content("works");
        }
    }
}