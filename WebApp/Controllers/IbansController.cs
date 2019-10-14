using BLL.Infrastructure;
using Domain.Iban;

namespace WebApp.Controllers
{
    public class IbansController : ChildPageCrudController<IbanDisplay, IbanDomain, long>
    {
        public IbansController(IIbanService service) : base(service)
        {
        }

        protected override string Title => "Iban Items";
    }
}
