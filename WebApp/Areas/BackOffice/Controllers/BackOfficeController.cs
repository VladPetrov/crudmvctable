using Common.StringConstants;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    [Authorize(Roles = RoleNames.BackOffice)]
    public abstract class BackOfficeController : Controller
    {
    }
}
