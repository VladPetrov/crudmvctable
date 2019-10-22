using Domain;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.Linq;

namespace WebApp.Model.TableRenders.Renders
{
    public static class ObjectValueExtensions
    {
        public static List<SelectListItem> ToSelectListItems<T>(this IEnumerable<IValueObject<T>> items)
        {
            return items.Select(x => new SelectListItem {Text = x.Name, Value = x.GetId()?.ToString()}).ToList();
        }
    }
}
