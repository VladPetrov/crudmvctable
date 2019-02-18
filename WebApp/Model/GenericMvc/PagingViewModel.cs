namespace WebApp.Model.GenericMvc
{
    public class PagingViewModel
    {
        public PagingViewModel(PagingInfo pagingInfo, string action)
        {
            PagingInfo = pagingInfo;
            Action = action;
        }
        public string Action { get; }
        public PagingInfo PagingInfo { get; }
    }
}
