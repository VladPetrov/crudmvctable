using System.IO;
using System.Threading;
using Common.Configuration;
using Serilog;
using Serilog.Core;
using Serilog.Events;


namespace Common
{
    public class LoggerConfig
    {
        public static void Configure(IAppConfigurationProvider configurationProvider)
        {
            InitLogger(configurationProvider);
        }

        private static void InitLogger(IAppConfigurationProvider configurationProvider)
        {
            var baseDir = configurationProvider.LoggerDirectory;

            if (string.IsNullOrEmpty(baseDir))
            {
                baseDir = Path.Combine(configurationProvider.ContentRootPath, "Logs");
            }

            var logFilePath = Path.Combine(baseDir, "log.txt");

            var configuration = new LoggerConfiguration()
                .Enrich.With<ThreadIdEnricher>()
                .MinimumLevel.Information()
                //.WriteTo.Async(a => a.MSSqlServer(configurationProvider.ConnectionString, "Serilog", restrictedToMinimumLevel: LogEventLevel.Debug, autoCreateSqlTable: true));
                .WriteTo.Async(a => a.RollingFile(logFilePath, LogEventLevel.Debug, configurationProvider.LoggerFileTemplate, null, 1073741824, 31, null, false, true));

            
            configuration = configuration.WriteTo.LiterateConsole(LogEventLevel.Verbose, configurationProvider.LoggerConsoleTemplate);
           

            var seqServerPath = configurationProvider.LoggerSeqUrl;
            if (!string.IsNullOrEmpty(seqServerPath))
            {
                configuration = configuration.WriteTo.Async(a => a.Seq(seqServerPath));
            }

            var logger = configuration.CreateLogger();
            Serilog.Log.Logger = logger;

            Log.Instance = logger;
        }

        internal sealed class ThreadIdEnricher : ILogEventEnricher
        {
            public void Enrich(LogEvent logEvent, ILogEventPropertyFactory propertyFactory)
            {
                logEvent.AddPropertyIfAbsent(propertyFactory.CreateProperty("ThreadId", Thread.CurrentThread.ManagedThreadId));
            }
        }
    }
}