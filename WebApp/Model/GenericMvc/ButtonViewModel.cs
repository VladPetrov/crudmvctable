namespace WebApp.Model.GenericMvc
{
    public class ButtonViewModel
    {
        public string Label { get; }
        public string ActionName { get; }
        public string @Class { get; }
        public object RouteValues { get; }

        private ButtonViewModel(string label, string actionName, string @class, object routeValues = null)
        {
            Label = label;
            ActionName = actionName;
            Class = @class;
            RouteValues = routeValues;
        }

        public static ButtonViewModel Create(string label, string actionName, string @class, object routeValues = null)
        {
            return new ButtonViewModel(label, actionName, @class, routeValues);
        } 
    }
}
