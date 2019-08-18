using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc.Filters;
using WebApp.Controllers;
using WebApp.Model.GenericMvc;

namespace WebApp.Filters
{
    public class TableActionsAccessCheckFilterAttribute : ActionFilterAttribute
    {
        private static Dictionary<string, TableActions> ActionsMap = new Dictionary<string, TableActions>
        {
            {nameof(BasicCrudController<DomainBase,DomainBase>.Create),  TableActions.Add},
            {nameof(BasicCrudController<DomainBase,DomainBase>.Details),  TableActions.Details},
            {nameof(BasicCrudController<DomainBase,DomainBase>.Edit),  TableActions.Edit},
            {nameof(BasicCrudController<DomainBase,DomainBase>.Delete),  TableActions.Delete}
        };

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            
        }
    }
}
