namespace WebApp.Model.Transactions
{
    public class TransactionFilesViewModel
    {
        public static string ContainerId => "FilesViewContainer";

        public long TransactionId { get; }

        public TransactionFilesViewModel(long transactionId)
        {
            TransactionId = transactionId;
        }
    }
}
