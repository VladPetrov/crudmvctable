using System.IO;
using Domain.DeleteResult;
using Domain.Files;

namespace DAL.Infrastructure
{
    public interface IFileRepository
    {
        FileDomain GetById(long id);
        FileDomain SaveFile(FileDomain doamin, Stream stream = null);
        void SaveFile(long transactionId, FileDomain domain, FileDomain domainPreview, Stream stream1, Stream stream2);
        FileDomain GetFilePreviewByFileId(long fileId);
        BinaryDataDomain GetBinary(long fileId);
        DeleteResult Delete(long id);
    }
}