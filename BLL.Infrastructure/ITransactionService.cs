using System.Collections.Generic;
using Common.Table;
using Domain.Files;
using Domain.Transaction;

namespace BLL.Infrastructure
{
    public interface ITransactionService : IGenericCrudService<TransactionDisplay, TransactionDomain>
    {
        FileDownloadable ExportTransactionsToCsv(ListRequest request);
        void EditNote(long transactionId, string note);
        void EditCategoryAndProject(List<long> transactionIds, long projectId, long categoryId);
    }
}
