using BLL.Infrastructure;
using Domain.Message;

namespace WebApp.Controllers
{
    public class SubMessagesController : ChildPageCrudController<SubMessageDisplay, SubMessageDetails>
    {
        public SubMessagesController(ISubMessageService service) : base(service)
        {
        }

        protected override string Title => "Child page Sub Messages";
    }
}
