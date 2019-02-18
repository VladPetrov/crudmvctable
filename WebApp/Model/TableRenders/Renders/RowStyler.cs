using Microsoft.AspNetCore.Html;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.TableRenders.Renders
{
    public class RowStyler : IRowStyler
    {
        public IHtmlContent Render(TableDescriptor descriptor, object domain)
        {
            return new HtmlString("class = 'test'");
        }
    }
}
