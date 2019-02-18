using Common;
using Domain;
using Microsoft.AspNetCore.Html;

namespace WebApp.Model.TableRenders.Renders
{
    public class ValueObjectColumnRenderer : IColumnRenderer
    {
        public IHtmlContent Render(object model)
        {
            if (model == null)
            {
                return new HtmlString("");
            }

            var value = model as ValueObject;
            
            Defensive.AssertNotNull(value);

            return new HtmlString(value.Name);
        }
    }
}
