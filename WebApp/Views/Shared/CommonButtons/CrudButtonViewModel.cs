namespace WebApp.Views.Shared.CommonButtons
{
    public class CrudButtonViewModel
    {
        public CrudButtonViewModel(string label, string url, string style, object routeValues = null)
        {
            Label = label;
            Url = url;
            Style = style;
            RouteValues = routeValues;
        }

        public string Style { get; }
        public string Label { get; }
        public string Url { get; }
        public object RouteValues { get; }
    }
}