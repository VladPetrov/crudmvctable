using System;
using System.Diagnostics;
using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Files;
using System.IO;
using Common;
using Domain.DeleteResult;

namespace BLL
{
    public class FileService : IFileService
    {
        private IFileRepository Repository { get; }

        public FileService(IFileRepository repository)
        {
            Repository = repository;
        }

        public FileDomain GetById(long id)
        {
            return Repository.GetById(id);
        }

        public FileDomain UpsertFile(FileDomain file, Stream stream)
        {
            return Repository.SaveFile(file, stream);
        }
        
        public BinaryDataDomain GetBinary(long fileId)
        {
            return Repository.GetBinary(fileId);
        }

        public DeleteResult Delete(long id)
        {
            return Repository.Delete(id);
        }
    }
}
