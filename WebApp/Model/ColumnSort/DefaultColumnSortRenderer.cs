using System.Threading.Tasks;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnSort
{
    public class DefaultColumnSortRenderer : IColumnSortRenderer
    {
        public Task<IHtmlContent> RenderSort(IHtmlHelper helper, TableSortDescriptor descriptor)
        {
            return helper.PartialAsync("_Sort", descriptor);
        }
    }
}
