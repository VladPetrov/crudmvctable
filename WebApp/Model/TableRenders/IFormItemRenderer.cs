using System.Threading.Tasks;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebApp.Model.Forms;

namespace WebApp.Model.TableRenders
{
    public interface IFormItemRenderer
    {
        Task<IHtmlContent> RenderAsync(IHtmlHelper htmlHelper, FormItemsDescriptor descriptor);
    }
}
