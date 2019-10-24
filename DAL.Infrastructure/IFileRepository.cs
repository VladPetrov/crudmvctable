using System.IO;
using Domain.DeleteResult;
using Domain.Files;

namespace DAL.Infrastructure
{
    public interface IFileRepository
    {
        FileDomain GetById(long id);
        FileDomain SaveFile(FileDomain doamin, Stream stream = null);
        BinaryDataDomain GetBinary(long fileId);
        DeleteResult Delete(long id);
    }
}