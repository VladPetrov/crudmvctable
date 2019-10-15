using BLL.Infrastructure;
using Common;
using Common.StringConstants;
using Domain.Client;
using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;
using WebApp.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Areas.BackOffice.Controllers
{
    [Area(AreasNames.BackOfficeArea)]
    public class ClientsController : MasterPageCrudController<ClientDisplay, ClientDomain, string>
    {
        public ClientsController(IClientService service) : base(service)
        {
        }

        protected override string Title => "Clients";

        [HttpPost]
        public override IActionResult Create(ClientDomain domain)
        {
            if (!ModelState.IsValid)
            {
                LogModelStateErrors();

                return GetPartialView(TitleType.Create, domain);
            }
            
            var result = Service.Upsert(domain);

            if (result.Success)
            {
                SetMessageFor(ActionStatus.Created);

                Defensive.AssertNotNull(result.Data);

                return RedirectToAction(nameof(Edit), new { id = result.Data.Id });
            }

            return GetPartialView(TitleType.Create, result);
        }
    }
}
