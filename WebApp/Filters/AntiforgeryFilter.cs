using System;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ViewFeatures.Internal;
using Microsoft.Extensions.Logging;

namespace WebApp.Filters
{
    [UsedImplicitly]
    public class AntiforgeryFilter : ValidateAntiforgeryTokenAuthorizationFilter
    {
        public AntiforgeryFilter(IAntiforgery antiforgery, ILoggerFactory loggerFactory)
            : base(antiforgery, loggerFactory)
        {
        }

        protected override bool ShouldValidate(AuthorizationFilterContext context)
        {
            
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            string method = context.HttpContext.Request.Method;
            var actionName = (context.ActionDescriptor as ControllerActionDescriptor)?.ActionName;

            return !string.Equals("GET", method, StringComparison.OrdinalIgnoreCase) &&
                   !string.Equals("DELETE", method, StringComparison.OrdinalIgnoreCase) &&
                   !string.Equals("HEAD", method, StringComparison.OrdinalIgnoreCase) &&
                   !string.Equals("TRACE", method, StringComparison.OrdinalIgnoreCase) && 
                   !string.Equals("OPTIONS", method, StringComparison.OrdinalIgnoreCase) &&
                   !string.Equals("ApplyFilters", actionName, StringComparison.OrdinalIgnoreCase) &&
                   !string.Equals("SaveManyToManyRelation", actionName, StringComparison.OrdinalIgnoreCase);
        }
    }
}