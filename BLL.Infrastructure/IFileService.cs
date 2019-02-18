using System.IO;
using Domain.DeleteResult;
using Domain.Files;

namespace BLL.Infrastructure
{
    public interface IFileService
    {
        FileDomain GetById(long id);
        FileDomain UpsertFile(FileDomain file, Stream strem);
        void UpsertTransactionFile(long transactionId, FileDomain file, Stream stream);
        FileDomain GetFilePreviewByFileId(long fileId);
        BinaryDataDomain GetBinary(long fileId);
        DeleteResult Delete(long id);
    }
}