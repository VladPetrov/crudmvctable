using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Threading.Tasks;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnFilter
{
    public interface IColumnFilterRenderer
    {
        Task<IHtmlContent> RenderFilter(IHtmlHelper helper, TableFilterDescriptor descriptor);
    }
}
