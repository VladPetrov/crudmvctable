using Microsoft.AspNetCore.Html;

namespace WebApp.Model.TableRenders
{
    public interface IColumnRenderer
    {
        IHtmlContent Render(object model);
    }
}