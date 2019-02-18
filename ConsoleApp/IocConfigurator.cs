using Common;
using Common.Configuration;
using Configuration;
using Configuration.AppSettings;
using Configuration.IoC;
using Configuration.Mapping;
using DAL.Model;
using LightInject.Microsoft.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Reflection;

namespace ConsoleApp
{
    internal class IocConfigurator
    {
        public static IServiceProvider CreateContainer(string env)
        {
            var path = GetAppSettingPath();

            var configuration = GetConfiguration(path, env);

            LoggerConfig.Configure(configuration);

            MappingConfig.RegisterMappings();

            Ioc.Init(configuration);

            var services = new ServiceCollection();

            DbContextConfiguration.UseSqlDataBase<DataBase>(services, GetConfiguration(path, env));

            return Ioc.Container.CreateServiceProvider(services);
        }

        private static AppConfigurationProvider GetConfiguration(string path, string env)
        {
            var configFile = AppSettingsFileProvider.LoadConfiguration(path, env);

            return new AppConfigurationProvider(configFile, "testRootPath");
        }

        private static string GetAppSettingPath()
        {
            var path = Path.GetDirectoryName(Assembly.GetCallingAssembly().Location);

            path = Path.Combine(path, "../../../../WebApp/");

            return path;
        }
    }
}
