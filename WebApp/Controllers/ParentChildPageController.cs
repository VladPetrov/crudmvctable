using WebApp.Filters;

namespace WebApp.Controllers
{
    [PageContextFilter]
    public abstract class ParentChildPageController : MvcController
    {
        public bool IsChildPage { get; }

        protected ParentChildPageController(bool isChildPage)
        {
            IsChildPage = isChildPage;
        }
    }
}
