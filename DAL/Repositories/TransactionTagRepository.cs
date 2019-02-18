using DAL.Infrastructure;
using DAL.Model;
using Domain.Transaction;

namespace DAL.Repositories
{
    public class TransactionTagRepository : GenericCrudRepository<DataBase, TransactionTag, TransactionTagDetails, TransactionTagDetails>, ITransactionTagRepository
    {
        private ITransactionManager TransactionManager { get; }

        public TransactionTagRepository(DataBase context, ITransactionManager transactionManager) : base(context)
        {
            TransactionManager = transactionManager;
        }
    }
}
