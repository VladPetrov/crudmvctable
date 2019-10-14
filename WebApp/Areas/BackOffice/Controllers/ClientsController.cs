using BLL.Infrastructure;
using Common.StringConstants;
using Domain.Client;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    public class ClientsController : MasterPageCrudController<ClientDisplay, ClientDomain, string>
    {
        public ClientsController(IClientService service) : base(service)
        {
        }

        protected override string Title => "Clients";
    }
}
