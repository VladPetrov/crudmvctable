using AutoMapper;
using AutoMapper.Configuration;
using Common;
using Common.Configuration;
using Configuration;
using Configuration.AppSettings;
using Configuration.IoC;
using DAL.Mapping;
using LightInject.Microsoft.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Reflection;


namespace Test
{
    internal class TestFixture
    {
        public IServiceCollection Services { get; } = new ServiceCollection();
        
        private IServiceProvider _container;
        
       private MapperConfigurationExpression MapperConfiguration { get; } = new MapperConfigurationExpression();
        
        public void Initialize()
        {
            Init();

            _container = Ioc.Container.CreateServiceProvider(Services);
        }

        public void UseInMemoryDatabase<T>() where T : DbContext
        {
            DbContextConfiguration.UseInMemoryDatabase<T>(Services, optionsAction => optionsAction.UseLoggerFactory(TestLoggerFactory.ConsoleLoggerFactory));
        }

        public void UseDatabase<T>() where T : DbContext
        {
            DbContextConfiguration.UseSqlDataBase<T>(Services, GetConfiguration(), optionsAction => optionsAction.UseLoggerFactory(TestLoggerFactory.ConsoleLoggerFactory));
        }

        public T GetService<T>()
        {
            var service = _container != null ? _container.GetService<T>() : throw new Exception("Test Fixture must be initialized");

            Defensive.AssertNotNull(service, $"Service {typeof(T).FullName} is not registered  in IoC container");

            return service;
        }

        public void AddMappingProfile<T>() where T : Profile
        {
            var profile = Activator.CreateInstance<T>();

            MapperConfiguration.AddProfile(profile);
        }

        private void Init()
        {
            var configuration = GetConfiguration();

            LoggerConfig.Configure(configuration);

            InitAutoMapper();

            Ioc.Init(configuration); 
        }

        private static AppConfigurationProvider GetConfiguration()
        {
            var path = Path.GetDirectoryName(Assembly.GetCallingAssembly().Location);

            var configFile = AppSettingsFileProvider.LoadConfiguration(path, "");
            
            return new AppConfigurationProvider(configFile, "testRootPath");
        }

        private void InitAutoMapper()
        {
            Mapping.AddProfiles(MapperConfiguration);
            Mapper.Reset();
            Mapper.Initialize(MapperConfiguration);

            Mapper.AssertConfigurationIsValid();
        }
    }
}