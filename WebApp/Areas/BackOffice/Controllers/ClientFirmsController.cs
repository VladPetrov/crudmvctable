using BLL.Infrastructure;
using Common.StringConstants;
using Domain.Client;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;
using WebApp.Model.GenericMvc;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    [SetAvailableTableActions(TableActions.Add, TableActions.Details, TableActions.Edit)]
    public class ClientFirmsController : ChildPageCrudController<ClientFirmDisplay, ClientFirmDomain, string>
    {
        public ClientFirmsController(IClientFirmService service) : base(service)
        {
        }

        protected override string Title => "Firms";
    }
}
