using System;
using System.Threading.Tasks;
using Common;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApp.Model.TableRenders;

namespace WebApp.Model.Forms
{
    public class FormItemsDescriptor
    {
        public static string DescriptorName => "FormItemsDescriptor_apoevq";

        public string Name { get; set; }

        public Type Type { get; set; }

        [CanBeNull]
        public IFormItemRenderer Renderer { private get; set; }

        public bool Readonly { get; set; }

        public object HtmlAttributes { get; set; }

        public bool CanRender => Renderer != null;

        public Task<IHtmlContent> RenderAsync(IHtmlHelper htmlHelper)
        {
            Defensive.AssertNotNull(Renderer);

            return Renderer.RenderAsync(htmlHelper, this);
        }
    }
}