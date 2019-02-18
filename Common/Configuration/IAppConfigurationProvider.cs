using System;
using System.Collections.Generic;

namespace Common.Configuration
{

    public interface IAppConfigurationProvider : IBaseConfigurationProvider
    {

    }

    
    public interface IBaseConfigurationProvider
    {
        List<SeedType> SeedType { get; }

        bool ApplyMigrations { get; }

        bool EnableSqlLog { get; }

        bool EnableDetailedSqlLog { get; }
      
        string ApplicationUrl { get; }

        /// <summary>
        /// Git commit hash.
        /// </summary>
        string Revision { get; }
        
        /// <summary>
        /// Build Number.
        /// </summary>
        long BuildNumber { get; }
        
        /// <summary>
        /// Enable client version validation filter.
        /// </summary>
        bool ClientVersionFilterEnabled { get; }

        string LoggerSeqUrl { get; }

        string LoggerDirectory { get; }

        string LoggerConsoleTemplate { get; }

        string LoggerFileTemplate { get; }

        string ConnectionString { get; }
        
        int SMTPSendAttemptsNumber { get; }

        int SMTPSendTimeout { get; }

        TimeZoneInfo TimeZone { get; }

        string ContentRootPath { get; }

        string MailServer { get; }

        int MailServerPort { get; }

        bool MailServerSsl { get; }

        string MailServerUser { get; }

        string MailServerPassword { get; }
    }

    public enum SeedType
    {
        None,
        Basic,
        TestData,
        StressTestData
    }
}