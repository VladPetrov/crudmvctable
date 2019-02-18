using System;
using System.Collections.Generic;
using JetBrains.Annotations;
using Microsoft.Extensions.Configuration;


namespace Common.Configuration
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class AppConfigurationProvider : AbstractConfigurationProvider, IAppConfigurationProvider
    {
        //public static AppConfigurationProvider Create(string path, string environmentName)
        //{
        //    var configuration = AppSettingsFileProvider.LoadConfiguration(env.ContentRootPath, env.EnvironmentName);

        //    ConfigurationProvider = new AppConfigurationProvider(configuration, env.ContentRootPath);
        //}

        private IConfigurationRoot Configuration { get; }

        private IConfiguration AppSettings => Configuration.GetSection("AppSettings");

        public AppConfigurationProvider(IConfigurationRoot configuration, string contentRootPath)
        {
            Configuration = configuration;
            ContentRootPath = contentRootPath;
        }

        public List<SeedType> SeedType => AppSettings.GetSeedType();

        public bool ApplyMigrations => AppSettings.GetBoolean(nameof(ApplyMigrations), false, false);
        
        public bool EnableSqlLog => AppSettings.GetBoolean(nameof(EnableSqlLog));

        public bool EnableDetailedSqlLog => AppSettings.GetBoolean(nameof(EnableDetailedSqlLog));
        
        public bool ClientVersionFilterEnabled => AppSettings.GetBoolean(nameof(ClientVersionFilterEnabled));
        
        public string ApplicationUrl => AppSettings.GetString(nameof(ApplicationUrl), true, "test");

        public string Revision => ApplicationVersion.Revision;
        
        public long BuildNumber => ApplicationVersion.BuildNumber;

        public string LoggerSeqUrl => AppSettings.GetString(nameof(LoggerSeqUrl));

        public string LoggerDirectory => AppSettings.GetString(nameof(LoggerDirectory), false, ""); //todo add default path

        public string LoggerConsoleTemplate => AppSettings.GetString(nameof(LoggerConsoleTemplate), true);

        public string LoggerFileTemplate => AppSettings.GetString(nameof(LoggerFileTemplate), true);
        
        public TimeZoneInfo TimeZone => TimeZoneInfo.FindSystemTimeZoneById(AppSettings.GetString(nameof(TimeZone), true));

        public string ContentRootPath { get; private set; }

        public int SMTPSendAttemptsNumber => AppSettings.GetInt(nameof(SMTPSendAttemptsNumber), true);

        public int SMTPSendTimeout => AppSettings.GetInt(nameof(SMTPSendTimeout), true);
        
        public string ConnectionString => Configuration.GetConnectionString("DefaultConnection");

        public string MailServer => AppSettings.GetString(nameof(MailServer), true);

        public int MailServerPort => AppSettings.GetInt(nameof(MailServerPort), true);

        public bool MailServerSsl => AppSettings.GetBoolean(nameof(MailServerSsl), true);

        public string MailServerUser => AppSettings.GetString(nameof(MailServerUser), true);

        public string MailServerPassword => AppSettings.GetString(nameof(MailServerPassword), true);
    }
}