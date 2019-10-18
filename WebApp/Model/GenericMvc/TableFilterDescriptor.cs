using Common;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Model.ColumnFilter;

namespace WebApp.Model.GenericMvc
{
    public class TableFilterDescriptor
    {
        public string FieldId { get; set; }

        public Type FiledType { get; set; }

        public TableViewModel Model { get; set; }

        public IColumnFilterRenderer ColumnFilterRenderer { private get; set; }

        public string ColumnClass { get; set; }

        public object FilterValue => Model.Filters.SingleOrDefault(x => x.FieldId == FieldId)?.Value;

        public async Task<IHtmlContent> RenderFilterAsync(IHtmlHelper helper)
        {
            Defensive.AssertNotNull(ColumnFilterRenderer, "ColumnFilterRenderer is null");

            return await ColumnFilterRenderer.RenderFilter(helper, this);
        }

        public IHtmlContent RenderFilterDataTags(Func<object, string> valueTransform = null)
        {
            var filterVal = valueTransform == null ? FilterValue?.ToString() : valueTransform(FilterValue);

            return new HtmlString($"data-filter-value='{filterVal}' data-field-id='{FieldId}'");
        }
    }
}
