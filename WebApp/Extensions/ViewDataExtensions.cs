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
    }
}
