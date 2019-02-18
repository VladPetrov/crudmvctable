using WebApp.Extensions;

namespace WebApp.Model.GenericMvc
{
    public class UrlDescriptor
    {
        public UrlDescriptor(string controller, string action, object @params = null)
        {
            Controller = controller.ToControllerName(true);
            Action = action;
            Params = @params;
        }

        public string Controller { get; }
        public string Action { get; }
        public object Params { get; }
    }
}