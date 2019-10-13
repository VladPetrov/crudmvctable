using Domain.Transaction;

namespace DAL.Infrastructure
{
    public interface ITransactionTagRepository : IGenericCrudRepository<TransactionTagDetails, TransactionTagDetails, long>
    {
    }
}
