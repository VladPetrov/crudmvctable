using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Threading.Tasks;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnSort
{
    public class NoColumnSortRenderer : IColumnSortRenderer
    {
        public Task<IHtmlContent> RenderSort(IHtmlHelper helper, TableSortDescriptor descriptor)
        {
           return Task.FromResult(helper.Label(descriptor.DisplayName, null));
        }
    }
}
