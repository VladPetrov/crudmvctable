namespace WebApp.Model.GenericMvc
{
    public class IndexPageTempData
    {
        public ActionStatus Status { get; }

        private IndexPageTempData(){}

        public IndexPageTempData(ActionStatus status)
        {
            Status = status;
        }
    }
}
