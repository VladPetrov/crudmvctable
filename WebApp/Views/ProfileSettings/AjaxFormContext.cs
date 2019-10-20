using WebApp.Model.Forms;

namespace WebApp.Views.ProfileSettings
{
    public class AjaxFormContext
    {
        public static string Name => "AjaxFormContext";

        public string ActionName { get; set; }

        public FormDescriptor FormDescriptor { get; set; }
    }
}
