namespace WebApp.Controllers
{
    public abstract class ParentChildPageController : MvcController
    {
        public bool IsChildPage { get; }

        protected ParentChildPageController(bool isChildPage)
        {
            IsChildPage = isChildPage;
        }
    }
}
