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

            double val = (long) model;
            
            return new HtmlString($"<div class=\"currency-euro\">{val/100:C}</div");
        }
    }
}
