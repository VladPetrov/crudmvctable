using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Threading.Tasks;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnSort
{
    public interface IColumnSortRenderer
    {
        Task<IHtmlContent> RenderSort(IHtmlHelper helper, TableSortDescriptor descriptor);
    }
}
