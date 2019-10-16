namespace WebApp.Model.GenericMvc
{
    public class StatusMessageViewModel
    {
        public static string Name => nameof(StatusMessageViewModel);

        public string Message { get; }

        public bool HasMessage => !string.IsNullOrEmpty(Message?.Trim());

        public StatusMessageViewModel(){}

        public StatusMessageViewModel(string message)
        {
            Message = message;
        }
    }
}
