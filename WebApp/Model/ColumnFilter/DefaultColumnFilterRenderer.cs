using System;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Threading.Tasks;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnFilter
{
    public class DefaultColumnFilterRenderer : IColumnFilterRenderer
    {
        public Task<IHtmlContent> RenderFilter(IHtmlHelper helper, TableFilterDescriptor descriptor)
        {
            var filedType = descriptor.FiledType;

            if (filedType == typeof(string))
            {
                return helper.PartialAsync("_StringFilter", descriptor);
            }

            if (filedType == typeof(bool))
            {
                return helper.PartialAsync("_BoolFilter", descriptor);
            }

            if (filedType.IsEnum)
            {
                return helper.PartialAsync("_EnumFilter", descriptor);
            }

            if (filedType == typeof(int) || filedType == typeof(long))
            {
                return helper.PartialAsync("_NumberFilter", descriptor);
            }

            if (filedType == typeof(DateTime))
            {
                return helper.PartialAsync("_DateRangeFilter", descriptor);
            }

            return Task.FromResult((IHtmlContent)new HtmlString(""));
        }
    }
}
