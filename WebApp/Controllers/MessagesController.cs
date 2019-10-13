using BLL.Infrastructure;
using Domain.Message;
using WebApp.Filters;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    //[TableAction(TableActions.Add, TableActions.Details)]
    public class MessagesController : MasterPageCrudController<MessageDisplay, MessageDetails, long>
    {
        public MessagesController(IMessageService service) : base(service)
        {

        }

        protected override string Title => "Message Items";
    }
}
