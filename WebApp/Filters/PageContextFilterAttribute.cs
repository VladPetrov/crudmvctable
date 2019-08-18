using System.Linq;
using System.Reflection;
using Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using WebApp.Controllers;
using WebApp.Extensions;
using WebApp.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Filters
{
    public class PageContextFilterAttribute : ActionFilterAttribute, IOrderedFilter
    {
        public PageContextFilterAttribute()
        {
            Order = 1;
        }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            SetPageContext(context);

            SetAvailableTableActions(context);

            //read user permissions and set access level
        }

        private void SetPageContext(ActionExecutingContext context)
        {
            var controller = context.Controller as Controller;

            Defensive.AssertNotNull(controller);

            var pageContext = GetPageContext(context);

            pageContext.ControllerName = controller.GetType().Name;

            if (context.HttpContext.Session.Get(GetSessionKey(SessionKeys.TableIsReadonly, controller), false))
            {
                pageContext.SetTableIsReadonly();
            }

            if (controller is ParentChildPageController contextAware)
            {
                pageContext.IsChildPage = contextAware.IsChildPage;
            }
        }

        private void SetAvailableTableActions(ActionExecutingContext context)
        {
            var actions = context.Controller.GetType()
                .GetCustomAttributes<SetAvailableTableActionsAttribute>()
                .SelectMany(x => x.TableActions)
                .ToList();

            if (actions.Any())
            {
                GetPageContext(context).SetTableActions(actions);
            }
        }

        private string GetSessionKey(SessionKeys key, Controller controller)
        {
            return controller.GetType().Name.ToSessionKey(key);
        }

        private MvcPageContext GetPageContext(ActionExecutingContext context)
        {
            return ((Controller)context.Controller).ViewData.GetPageContext();
        }
    }
}
