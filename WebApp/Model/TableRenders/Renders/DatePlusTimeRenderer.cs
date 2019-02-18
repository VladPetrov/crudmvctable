using Microsoft.AspNetCore.Html;

namespace WebApp.Model.TableRenders.Renders
{
    public class DatePlusTimeRenderer : IColumnRenderer
    {
        public IHtmlContent Render(object model)
        {
            return new HtmlString($"<div class=\"display-label\">{model}</div>");
        }
    }
}
