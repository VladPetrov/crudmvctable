using Common.Configuration;
using Configuration;
using Configuration.IoC;
using Configuration.Mapping;
using DAL.Model;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.IO;


namespace Job
{
    class Program
    {
        static void Main(string[] args)
        {
            ServiceCollection services = new ServiceCollection();

            ConfigureServices(services);

            var config = new JobHostConfiguration();
            config.DashboardConnectionString = Configuration.GetConnectionString("AzureWebJobsDashboard");
            config.StorageConnectionString = Configuration.GetConnectionString("AzureWebJobsStorage");

            var provider = services.BuildServiceProvider();

            var func = provider.GetService<Functions>();

            config.JobActivator = new JobActivator(services.BuildServiceProvider());

            config.UseTimers();

            if (config.IsDevelopment)
            {
                config.UseDevelopmentSettings();
            }

            var host = new JobHost(config);

            host.RunAndBlock();
        }

        private static IConfigurationRoot Configuration { get; set; }

        private static void ConfigureServices(IServiceCollection services)
        {
            services.AddLogging(builder => builder.AddConsole());
                        
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            Configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environment}.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            var ConfigurationProvider = new AppConfigurationProvider(Configuration, Directory.GetCurrentDirectory());

            //Ioc.Configure(services, ConfigurationProvider);

            DbContextConfiguration.UseSqlDataBase<DataBase>(services, ConfigurationProvider);

            MappingConfig.RegisterMappings();

            services.AddTransient<Functions, Functions>();
            services.AddSingleton(Configuration);
        }
    }
}
