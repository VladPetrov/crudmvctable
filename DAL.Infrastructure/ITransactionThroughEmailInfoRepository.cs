using Domain.ImportTransactions;

namespace DAL.Infrastructure
{
    public interface ITransactionThroughEmailInfoRepository
    {
        long GetLastImportedId(Bank bank);
        void SetLastImportedId(Bank bank, long id);
    }
}