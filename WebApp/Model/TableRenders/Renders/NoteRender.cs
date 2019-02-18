using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Html;

namespace WebApp.Model.TableRenders.Renders
{
    public class NoteRender : IColumnRenderer
    {
        public IHtmlContent Render(object model)
        {
            if (model == null)
            {
                return new HtmlString("");
            }

            var note = model as string;
            
            return new HtmlString($"<div class='custom-popover note'>{note}</div>");
        }
    }
}
