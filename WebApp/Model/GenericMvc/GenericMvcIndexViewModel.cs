
namespace WebApp.Model.GenericMvc
{
    public class GenericMvcIndexViewModel
    {
        public bool RenderLayout { get; }
        
        public GenericMvcIndexViewModel(bool renderLayout)
        {
            RenderLayout = renderLayout;
        }
    }
}
