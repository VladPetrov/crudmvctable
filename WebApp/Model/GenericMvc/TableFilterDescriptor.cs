using System;
using System.Linq;
using System.Threading.Tasks;
using Common;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApp.Model.ColumnFilter;

namespace WebApp.Model.GenericMvc
{
    public class TableFilterDescriptor
    {
        public string FieldId { get; set; }

        public Type FiledType { get; set; }

        public TableViewModel Model { get; set; }

        public IColumnFilterRenderer ColumnFilterRenderer { private get; set; }

        public object FilterValue => Model.Filters.SingleOrDefault(x => x.FieldId == FieldId)?.Value;

        public async Task<IHtmlContent> RenderFilterAsync(IHtmlHelper helper)
        {
            Defensive.AssertNotNull(ColumnFilterRenderer, "ColumnFilterRenderer is null");

            return await ColumnFilterRenderer.RenderFilter(helper, this);
        }

        public IHtmlContent RenderFilterDataTags()
        {
            return new HtmlString($"data-filter-value='{FilterValue}' data-field-id='{FieldId}'");
        }
    }
}
