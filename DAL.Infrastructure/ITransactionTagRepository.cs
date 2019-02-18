using Domain.Transaction;
using Domain.Transaction.CsvImport;

namespace DAL.Infrastructure
{
    public interface ITransactionTagRepository : IGenericCrudRepository<TransactionTagDetails, TransactionTagDetails>
    {
    }
}
