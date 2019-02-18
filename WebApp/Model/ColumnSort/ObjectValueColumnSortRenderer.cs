using System;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnSort
{
    [Obsolete]
    public class ObjectValueColumnSortRenderer : IColumnSortRenderer
    {
        public Task<IHtmlContent> RenderSort(IHtmlHelper helper, TableSortDescriptor descriptor)
        {
            descriptor.FieldId = $"{descriptor.FieldId}.{nameof(ValueObject.Name)}";
            return helper.PartialAsync("_Sort", descriptor);
        }
    }
}
