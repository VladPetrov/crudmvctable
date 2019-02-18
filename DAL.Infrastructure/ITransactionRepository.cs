using Domain.Transaction;
using Domain.Transaction.CsvImport;

namespace DAL.Infrastructure
{
    public interface ITransactionRepository : IGenericCrudRepository<TransactionDisplay, TransactionDomain>
    {
        TransactionImportResult TryImportTransaction(TransactionDomain domain);
        void EditNote(long transactionId, string note);
    }
}
