using DAL.Model;
using Domain.ImportTransactions;
using System.Linq;
using DAL.Infrastructure;

namespace DAL.Repositories
{
    public class TransactionThroughEmailInfoRepository : BaseRepository<DataBase>, ITransactionThroughEmailInfoRepository
    {
        public TransactionThroughEmailInfoRepository(DataBase context) : base(context)
        {
        }

        public long GetLastImportedId(Bank bank)
        {
            return Context.TransactionThroughEmailImportInfo.FirstOrDefault(x => x.Bank == bank)?.LastImportedEmailId ?? 0;
        }

        public void SetLastImportedId(Bank bank, long id)
        {
            if (id <= 0)
            {
                return;
            }

            var importInfo = Context.TransactionThroughEmailImportInfo.SingleOrDefault(x => x.Bank == bank) ??
                             new TransactionThroughEmailImportInfo {Bank = bank};

            if (id > importInfo.LastImportedEmailId)
            {
                importInfo.LastImportedEmailId = id;
            }

            if (importInfo.IsNew)
            {
                Context.Add(importInfo);
            }

            Context.SaveChanges();
        }
    }
}
