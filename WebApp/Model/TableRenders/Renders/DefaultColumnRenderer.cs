using System;
using System.ComponentModel.DataAnnotations;
using System.Reflection;
using Common.Extensions;
using Microsoft.AspNetCore.Html;

namespace WebApp.Model.TableRenders.Renders
{
    public class DefaultColumnRenderer : IColumnRenderer
    {
        public IHtmlContent Render(object model)
        {
            if (model == null)
            {
                return new HtmlString("");
            }

            string content;
            
            if (model is string s)
            {
                content = $"<div class=\"display-label\">{s}</div>";
            }
            else if (model is bool b)
            {
                content =$"<input {(b ? "checked=\"checked\"" : "")}\" class=\"check-box\" disabled=\"disabled\" type=\"checkbox\">";
            }
            else if (model is DateTime d)
            {
                content = $"<div class=\"display-label\">{d:dd.MM.yyyy}</div>";
            }
            else if (model.GetType().IsEnum)
            {
                var name = ((DisplayAttribute)model.GetType().GetCustomAttribute(typeof(DisplayAttribute)))?.Name ?? model.ToString().ToDisplayName();
                content = $"<div class=\"display-label\">{name}</div>";
            }
            else
            {
                content = $"<div class=\"display-label\">{model}</div>";
            }
            
            return new HtmlString(content);
        }
    }
}