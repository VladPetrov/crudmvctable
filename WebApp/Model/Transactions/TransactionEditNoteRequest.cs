namespace WebApp.Model.Transactions
{
    public class TransactionEditNoteRequest
    {
        public long TransactionId { get; set; }
        public string Note { get; set; }
    }
}
