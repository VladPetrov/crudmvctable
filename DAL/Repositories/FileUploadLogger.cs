using AutoMapper;
using Common;
using Common.Extensions;
using DAL.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain.FileUploadLogger;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Optional.Unsafe;
using System.Linq;

namespace DAL.Repositories
{
    [UsedImplicitly]
    public class FileUploadLogger : BaseRepository<TransientDataBase, long>, IFileUploadLogger
    {
        public FileUploadLogger(TransientDataBase context) : base(context)
        {
        }

        public long CreateLog(string fileName)
        {
            Defensive.AssertNotNull(fileName, "File name can't be empty");

            var log = FileUploadLog.CreateFor(fileName);

            Context.Add(log);

            Context.SaveChanges();

            return log.Id;
        }

        public void AddError(long logId, string message)
        {
            var log = Context.FileUploadLogs.SingleOrDefault(x => x.Id == logId);

            Defensive.AssertNotNull(log, $"Log with id({logId}) was not found");

            log.Errors.Add(FileUploadLogError.Create(message));

            Context.SaveChanges();
        }

        public void EndLog(long logId)
        {
            var log = Context.FileUploadLogs.SingleOrDefault(x => x.Id == logId);

            Defensive.AssertNotNull(log, $"Log with id({logId}) was not found");

            log.Status = !log.Errors.Any() ? FileUploadStatus.FinishedSuccessfully : FileUploadStatus.FinishedWithErrors;

            log.EndDateTime = DateTimeContext.Now;

            Context.SaveChanges();
        }

        public UploadFileLogDetails GetLogsById(long id)
        {
            Defensive.AssertTrue(id > 0);

            return Context.FileUploadLogs
                .Include(x => x.Errors)
                .FindOptional(x => x.Id == id)
                .SomeOrEntityNotFoundException()
                .Do(e => Context.Entry(e).GetDatabaseValues())
                .Map(Mapper.Map<UploadFileLogDetails>)
                .ValueOrFailure();
        }

        public UploadFileLogDetails GetLastLog()
        {
            return Context.FileUploadLogs
                .Include(x => x.Errors)
                .OrderBy(x => x.Id)
                .LastOrDefault()
                .AsOptional()
                .Do(e => Context.Entry(e).GetDatabaseValues())
                .Map(Mapper.Map<UploadFileLogDetails>)
                .ValueOr(new UploadFileLogDetails());
        }
    }
}
