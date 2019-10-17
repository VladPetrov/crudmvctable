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

            var val = (long)model;

            var doubleVal = (double) val;

            var str = Regex.Replace($"{doubleVal / 100:0.00} EUR", @"\B(?=(\d{3})+(?!\d))", " ");

            return new HtmlString($"<div class=\"currency-euro\">{str}</div");
        }
    }
}
