using WebApp.Extensions;
using WebApp.Model;

namespace WebApp.Controllers
{
    public abstract class ContextAwareController : MvcController
    {
        protected bool IsChildPage { get; }

        protected ContextAwareController(bool isChildPage)
        {
            IsChildPage = isChildPage;
        }

        public override void OnActionExecuted(Microsoft.AspNetCore.Mvc.Filters.ActionExecutedContext context)
        {
            base.OnActionExecuted(context);
            SetPageContext();
        }

        protected void SetPageContext()
        {
            var context = ViewData.GetPageContext();

            context.ControllerName = GetType().Name;

            context.IsChildPage = IsChildPage;

            if (GetFromSession(SessionKeys.TableIsReadonly, false))
            {
                context.SetTableIsReadonly();
            }
        }
    }
}
