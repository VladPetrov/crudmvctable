using Common;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApp.Filters
{
    public class GlobalExceptionHandler : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            Log.Logger().Error(context.Exception, "Unhandled exception in controller: {controller}, action: {action}", context.RouteData.Values["controller"], context.RouteData.Values["action"]);

            context.Result = new ExceptionActionResult(context.Exception);
        }
    }
}

