using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApp.Model.GenericMvc;

namespace WebApp.Components
{
    public class ButtonComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(ButtonViewModel model)
        {
            return View(model);
        }
    }
}