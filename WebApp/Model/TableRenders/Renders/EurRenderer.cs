using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Html;

namespace WebApp.Model.TableRenders.Renders
{
    public class EurRenderer : IColumnRenderer
    {
        public IHtmlContent Render(object model)
        {
            if (model == null)
            {
                return new HtmlString("");
            }
            
            return new HtmlString($"<div class=\"currency-euro\">{model}</div");
        }
    }
}
