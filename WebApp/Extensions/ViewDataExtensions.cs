using Microsoft.AspNetCore.Mvc.ViewFeatures;
using WebApp.Model.GenericMvc;

namespace WebApp.Extensions
{
    public static class ViewDataExtensions
    {
        public static MvcPageContext GetPageContext(this ViewDataDictionary viewData)
        {
            MvcPageContext context;

            if (viewData[MvcPageContext.Name] == null)
            {
                context = new MvcPageContext();
                viewData[MvcPageContext.Name] = context;
            }
            else
            {
                context = (MvcPageContext)viewData[MvcPageContext.Name];
            }

            return context;
        }

        public static void SetStatusMessage(this ViewDataDictionary viewData, string message)
        {
            if (message != null)
            {
                viewData[StatusMessageViewModel.Name] = new StatusMessageViewModel(message);
            }
        }

        public static void SetPageTitle(this ViewDataDictionary viewData, string title)
        {
            if (title != null)
            {
                viewData[MvcViewConstants.Title] = title;
            }
        }

        public static StatusMessageViewModel GetStatusMessage(this ViewDataDictionary viewData)
        {
            return (StatusMessageViewModel)viewData[StatusMessageViewModel.Name] ?? new StatusMessageViewModel();
        }
    }
}
