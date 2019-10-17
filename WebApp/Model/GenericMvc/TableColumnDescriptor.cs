using System;
using WebApp.Model.ColumnFilter;
using WebApp.Model.TableRenders;
using Microsoft.AspNetCore.Html;
using System.Threading.Tasks;
using Common;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApp.Model.ColumnSort;

namespace WebApp.Model.GenericMvc
{
    public class TableColumnDescriptor
    {
        public string DisplayName { get; set; }

        public string FieldId { get; set; }

        public Type FiledType { get; set; }

        public Delegate DataSelector { get; set; }

        public IColumnRenderer ColumnRenderer { get; set; }

        public IColumnFilterRenderer ColumnFilterRenderer { get; set; }

        public IColumnSortRenderer ColumnSortRenderer { get; set; }

        public string ColumnClass { get; set; }

        public Task<IHtmlContent> RenderColumnFilter(IHtmlHelper helper)
        {
            return this.ToFiltersDescriptor(GetModel(helper)).RenderFilterAsync(helper);
        }

        public Task<IHtmlContent> RenderColumnSort(IHtmlHelper helper)
        {
            return this.ToSortDescriptor(GetModel(helper)).RenderSortAsync(helper);
        }

        private TableViewModel GetModel(IHtmlHelper helper)
        {
            var model = helper.ViewData.Model as TableViewModel;
            Defensive.AssertNotNull(model);
            return model;
        }
    }
}