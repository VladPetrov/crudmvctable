using BLL.Infrastructure;
using Common.StringConstants;
using Domain.Client;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    public class ClientFirmsController : ChildPageCrudController<ClientFirmDisplay, ClientFirmDomain, string>
    {
        public ClientFirmsController(IClientFirmService service) : base(service)
        {
        }

        protected override string Title => "Firms";
    }
}
