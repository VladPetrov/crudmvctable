namespace WebApp.Model
{
    public class AjaxContentOnClickViewModel
    {
        public string Url { get; }
        public string ClickObjectId { get; }
        public int LoadOnInit { get; }

        public AjaxContentOnClickViewModel(string url, string clickObjectId, bool loadOnInit = false)
        {
            Url = url;
            ClickObjectId = clickObjectId;
            LoadOnInit = loadOnInit ? 1 : 0;
        }
    }
}
