using System.Linq;
using AutoMapper;
using Common.Extensions;
using Common.Table;
using DAL.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Transaction;
using Domain.Transaction.CsvImport;
using Microsoft.EntityFrameworkCore;
using Optional.Unsafe;

namespace DAL.Repositories
{
    public class TransactionRepository : GenericCrudRepository<DataBase, Transaction, TransactionDisplay, TransactionDomain>, ITransactionRepository
    {
        public TransactionRepository(DataBase context): base(context){}

        public override TransactionDomain GetById(long id) //todo add lazy loading
        {
            return Set
                .Include(x => x.Entity)
                .Include(x => x.Project)
                .Include(x => x.RecipientEntity)
                .Include(x => x.Category)
                .FindOptional(id)
                .SomeOrEntityNotFoundException()
                .Do(e => Context.Entry(e).GetDatabaseValues())
                .Map(Mapper.Map<TransactionDomain>)
                .ValueOrFailure();
        }

        public override ListResult<TransactionDisplay> List(ListRequest request)
        {
            return Set.ApplyTableRequest<Transaction, TransactionDisplay, long>(request, new SortOrder(nameof(TransactionDisplay.CreatedTime), OrderDirection.Desc));
        }

        public TransactionImportResult TryImportTransaction(TransactionDomain domain)
        {
            if (Context.Transactions.Any(x => x.IdOfTransaction == domain.IdOfTransaction))
            {
                return TransactionImportResult.TransactionAlreadyExists;
            }

            base.Upsert(domain);

            return TransactionImportResult.Success;
        }

        public void EditNote(long transactionId, string note)
        {
            var transaction = Context.Transactions.First(x => x.Id == transactionId);

            transaction.Note = note;

            Context.SaveChanges();
        }
    }
}
