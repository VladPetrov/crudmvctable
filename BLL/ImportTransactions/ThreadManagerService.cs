using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using BLL.Infrastructure;
using Common;
using Domain;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace BLL.ImportTransactions
{
    [UsedImplicitly]
    public class ThreadManagerService
    {
        private const int ThreadsNumber = 1;

        private IServiceScopeFactory Factory { get; }
        private ITransactionCsvImportService ImportService { get; }
        private static SemaphoreSlim Semaphore { get; } = new SemaphoreSlim(ThreadsNumber);

        public ThreadManagerService(IServiceScopeFactory factory, ITransactionCsvImportService importService)
        {
            Factory = factory;
            ImportService = importService;
        }

        public OperationResult<long> ImportFiles(IFormFile file, long entityId)
        {
            if (!Semaphore.Wait(TimeSpan.FromSeconds(1)))
            {
                var message = $"Previous file import haven't finished yet. Failed to import File '{file.FileName}'";
                Log.Logger().Warning(message);
                return OperationResult.Error(message).ToEmpty<long>();
            }

            try
            {
                var logIdResult = ImportService.CreateLog(file.FileName);

                if (logIdResult.Success)
                {
                    var stream = new MemoryStream();
                    file.CopyTo(stream);
                    stream.Position = 0;

                    Task.Factory.StartNew(() => Import(stream, file.FileName, entityId, logIdResult.Data), CancellationToken.None, TaskCreationOptions.LongRunning, TaskScheduler.Default)
                        .ContinueWith(t => LogTaskException(t.Exception, file.FileName), TaskContinuationOptions.OnlyOnFaulted)
                        .ContinueWith(t =>
                        {
                            Semaphore.Release(1);
                            stream?.Dispose();
                        });
                }

                return logIdResult;

            }
            catch (Exception e)
            {
                var message = $"File '{file.FileName}' import failed. Message: {e.Message}";
                Log.Logger().Error(e, message);

                Semaphore.Release(1);

                return OperationResult.Error(e, message).ToEmpty<long>();
            }
        }

        private void Import(Stream stream, string fileName, long entityId, long logId)
        {
            using (var scope = Factory.CreateScope())
            {
                var service = scope.ServiceProvider.GetRequiredService<ITransactionCsvImportService>();

                service.Import(stream, fileName, entityId, logId);
            }
        }

        private void LogTaskException(Exception e, string fileName)
        {
            Log.Logger().Error(e, $"File '{fileName}' import failed. Message: {e.Message}");

            if (e is AggregateException ex)
            {
                foreach (var exc in ex.InnerExceptions)
                {
                    Log.Logger().Error(exc, "Inner Error: {mess}", exc.Message);
                }
            }
        }
    }
}
