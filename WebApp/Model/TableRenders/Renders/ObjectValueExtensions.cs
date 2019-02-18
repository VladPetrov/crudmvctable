using Domain;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.Linq;

namespace WebApp.Model.TableRenders.Renders
{
    public static class ObjectValueExtensions
    {
        public static List<SelectListItem> ToSelectListItems(this IEnumerable<ValueObject> items)
        {
            return items.Select(x => new SelectListItem {Text = x.Name, Value = x.Id.ToString()}).ToList();
        }
    }
}
