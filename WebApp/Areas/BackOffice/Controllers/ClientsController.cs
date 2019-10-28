using BLL.Infrastructure;
using Common.StringConstants;
using Domain.Client;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;
using WebApp.Model.GenericMvc;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    [Authorize(Roles = RoleNames.BackOffice)]
    [SetAvailableTableActions(TableActions.Add, TableActions.Details, TableActions.Edit)]
    public class ClientsController : MasterPageCrudController<ClientDisplay, ClientDomain, string>
    {
        public ClientsController(IClientService service) : base(service)
        {
        }

        protected override string Title => "Clients";
    }
}
