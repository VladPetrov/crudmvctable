using Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using WebApp.Model.GenericMvc;

namespace WebApp.Filters
{
    public class TableActionAttribute : ActionFilterAttribute
    {
        private readonly TableActions[] _actions;

        public TableActionAttribute(params TableActions[] actions)
        {
            _actions = actions;
        }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var controller = context.Controller as Controller;

            Defensive.AssertNotNull(controller);

            var pageContext = new MvcPageContext();

            pageContext.SetTableActions(_actions);

            controller.ViewData[MvcPageContext.Name] = pageContext;
        }
    }
}
