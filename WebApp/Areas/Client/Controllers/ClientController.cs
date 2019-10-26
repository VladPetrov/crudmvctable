using Common.StringConstants;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;

namespace WebApp.Areas.Client.Controllers
{
    [Area(AreasNames.ClientArea)]
    //[Authorize(Roles = RoleNames.Client)]
    public abstract class ClientController : MvcController
    {
    }
}
