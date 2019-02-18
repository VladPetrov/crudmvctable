using Common;
using Domain;
using Microsoft.AspNetCore.Html;
using System.Collections.Generic;
using System.IO;
using System.Text;
using WebApp.Controllers;

namespace WebApp.Model.TableRenders.Renders
{
    public class FilesListRenderer : IColumnRenderer
    {
        public int MaxNameLength => 15;

        public IHtmlContent Render(object model)
        {
            if (model == null)
            {
                return new HtmlString("");
            }

            var files = model as List<ValueObject>;

            Defensive.AssertNotNull(files);

            var stb = new StringBuilder();

            foreach (var file in files)
            {
                var name = Path.GetFileNameWithoutExtension(file.Name);
                //var ext = Path.GetExtension(file.Name);

                if (name.Length > MaxNameLength)
                {
                    name = $"{name.Substring(0, MaxNameLength)}...";
                }

                stb.Append($"<div data-file-id='{file.Id}' class='custom-popover preview'>{name}</div>");
            }

            return new HtmlString(stb.ToString());
        }
    }
}
