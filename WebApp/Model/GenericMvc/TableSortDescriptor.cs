using System;
using System.Linq;
using System.Threading.Tasks;
using Common;
using Common.Table;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApp.Model.ColumnSort;


namespace WebApp.Model.GenericMvc
{
    public class TableSortDescriptor
    {
        public string DisplayName { get; set; }       

        public string FieldId { get; set; }

        public TableViewModel Model { get; set; }

        public IColumnSortRenderer ColumnSortRenderer { private get; set; }

        public OrderDirection? Direction => Model.Orders.FirstOrDefault(x => x.FieldId == FieldId)?.Direction;

        public async Task<IHtmlContent> RenderSortAsync(IHtmlHelper helper)
        {
            Defensive.AssertNotNull(ColumnSortRenderer, "ColumnSortRenderer is null");

            return await ColumnSortRenderer.RenderSort(helper, this);
        }

        public int? DirectionAsInt => Direction.HasValue ? (int) Direction.Value : (int?) null;
    }
}
