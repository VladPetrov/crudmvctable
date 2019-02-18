using BLL.Infrastructure;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;


namespace Job
{
    public class Functions
    {
        private ILogger<Functions> Logger { get; }

        private IImportTransactionsEmailService Service { get; }

        public Functions(ILogger<Functions> logger, IImportTransactionsEmailService service)
        {
            Logger = logger;
            Service = service;
        }

        public void ProcessQueueMessage([TimerTrigger("0 0 * * * *")] TimerInfo timerInfo)
        {
            Logger.LogInformation($"Job started at {DateTime.Now.ToString()}");

            try
            {
                Service.ImportTransactions();
            }
            catch(Exception e)
            {
                Logger.LogError(e, "Job failed");
                throw;
            }

            Logger.LogInformation($"Job finished at {DateTime.Now.ToString()}");
        }
    }
}
