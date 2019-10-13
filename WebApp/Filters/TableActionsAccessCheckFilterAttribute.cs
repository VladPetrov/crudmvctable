using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Controllers;
using WebApp.Controllers;
using WebApp.Extensions;
using WebApp.Model.GenericMvc;

namespace WebApp.Filters
{
    public class TableActionsAccessCheckFilterAttribute : ActionFilterAttribute
    {
        private static readonly Dictionary<string, TableActions> ActionNameToTableActionsMap = new Dictionary<string, TableActions>
        {
            {nameof(BasicCrudController<DomainBase,DomainBase, long>.Create),  TableActions.Add},
            {nameof(BasicCrudController<DomainBase,DomainBase, long>.Details),  TableActions.Details},
            {nameof(BasicCrudController<DomainBase,DomainBase, long>.Edit),  TableActions.Edit},
            {nameof(BasicCrudController<DomainBase,DomainBase, long>.Delete),  TableActions.Delete}
        };

        public TableActionsAccessCheckFilterAttribute()
        {
            Order = 2;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var pageContext = GetPageContext(context);
            
            if (ActionNameToTableActionsMap.TryGetValue(((ControllerActionDescriptor)context.ActionDescriptor).ActionName, out var requiredPermission))
            {
                if (!pageContext.IsActionEnabled(requiredPermission))
                {
                    context.Result = new StatusCodeResult(404);
                }
            }
        }

        private MvcPageContext GetPageContext(ActionExecutingContext context)
        {
            return ((Controller)context.Controller).ViewData.GetPageContext();
        }
    }
}
