using Microsoft.AspNetCore.Mvc;
using WebApp.Model.GenericMvc;

namespace WebApp.Model
{
    public static class UrlExtensions
    {
        public static string MapToAction(this IUrlHelper helper, UrlDescriptor url)
        {
            return url != null ? helper.Action(url.Action, url.Controller, url.Params) : null;
        }
    }
}
