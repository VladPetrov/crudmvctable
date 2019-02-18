
namespace WebApp.Model.GenericMvc
{
    public class GenericMvcIndexViewModel
    {
        public string StatusMessage { get; }
        
        public bool RenderLayout { get; }
        
        public GenericMvcIndexViewModel(bool renderLayout, string statusMessage = null)
        {
            RenderLayout = renderLayout;
            StatusMessage = statusMessage;
        }
    }
}
