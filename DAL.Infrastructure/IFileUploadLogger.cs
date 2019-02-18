using Domain.FileUploadLogger;
using JetBrains.Annotations;

namespace DAL.Infrastructure
{
    public interface IFileUploadLogger
    {
        long CreateLog([NotNull] string fileName);

        void AddError(long logId, [NotNull] string message);

        void EndLog(long logId);

        UploadFileLogDetails GetLogsById(long id);

        UploadFileLogDetails GetLastLog();
    }
}
