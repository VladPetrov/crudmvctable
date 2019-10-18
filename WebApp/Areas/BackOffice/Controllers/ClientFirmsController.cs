using BLL.Infrastructure;
using Domain.Client;
using WebApp.Controllers;

namespace WebApp.Areas.BackOffice.Controllers
{
    public class ClientFirmsController : ChildPageCrudController<ClientFirmDisplay, ClientFirmDomain, string>
    {
        public ClientFirmsController(IClientFirmService service) : base(service)
        {
        }

        protected override string Title => "Firms";
    }
}
