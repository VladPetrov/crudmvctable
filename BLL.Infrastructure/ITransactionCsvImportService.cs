using System.IO;
using Domain;

namespace BLL.Infrastructure
{
    public interface ITransactionCsvImportService
    {
        OperationResult<long> CreateLog(string fileName);
        void Import(Stream stream, string fileName, long entityId, long logId);
     }
}
