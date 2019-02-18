using Microsoft.AspNetCore.Html;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.TableRenders
{
    public interface IRowStyler
    {
        IHtmlContent Render(TableDescriptor descriptor, object domain);
    }
}