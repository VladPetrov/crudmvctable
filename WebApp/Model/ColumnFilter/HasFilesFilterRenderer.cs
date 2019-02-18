using Domain.Transaction;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Threading.Tasks;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnFilter
{
    public class HasFilesFilterRenderer : IColumnFilterRenderer
    {
        public Task<IHtmlContent> RenderFilter(IHtmlHelper helper, TableFilterDescriptor descriptor)
        {
            descriptor.FieldId = nameof(TransactionDisplay.HasFiles);

            return helper.PartialAsync("_boolFilter", descriptor);
        }
    }
}
