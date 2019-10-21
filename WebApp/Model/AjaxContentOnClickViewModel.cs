namespace WebApp.Model
{
    public class AjaxContentOnClickViewModel
    {
        public string Url { get; }
        public string ClickObjectId { get; }

        public AjaxContentOnClickViewModel(string url, string clickObjectId)
        {
            Url = url;
            ClickObjectId = clickObjectId;
        }
    }
}
