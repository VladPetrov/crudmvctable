using BLL;
using BLL.Infrastructure;
using Common.Configuration;
using DAL.DbManagers;
using DAL.DbManagers.Seeds;
using DAL.Infrastructure;
using DAL.Model;
using DAL.Repositories;
using JetBrains.Annotations;
using LightInject;

namespace Configuration.IoC
{
    [UsedImplicitly]
    public class Ioc
    {
        public static IServiceContainer Container { get; private set; }

        public static void Init(IAppConfigurationProvider configurationProvider)
        {
            Container = new ServiceContainer(new ContainerOptions { EnablePropertyInjection = false });

            Container.RegisterInstance(configurationProvider);

            Container.Register<IValidateService, ValidateService>();
            Container.Register<IEmailSenderService, EmailSenderService>();
            Container.Register(typeof(IValueObjectRepository<,>), typeof(ValueObjectRepository<,>));
            Container.Register<IFileRepository, FileRepository>();
            Container.Register<IClientRepository, ClientRepository>();
            Container.Register<IClientFirmRepository, ClientFirmRepository>();
            Container.Register<IPostRepository, PostRepository>();
            Container.Register<IPostDataExportService, PostDataExportService>();

            Container.Register<DataBase>(new PerRequestLifeTime());
            Container.Register<TransientDataBase>();
            
            Container.Register<SeedManager>();
            Container.Register<MigrationManager>();
            Container.Register<ITransactionManager, TransactionManager>();

            Container.Register<IGmailService, GmailService>();
            Container.Register<IFileService, FileService>();
            Container.Register<ScriptsResolveService, ScriptsResolveService>();
            Container.Register<IClientService, ClientService>();
            Container.Register<IClientFirmService, ClientFirmService>();
            Container.Register<IProfileSettingsService, ProfileSettingsServiceTr>();
            Container.Register<IPostService, PostService>();
            Container.Register<IClientInboxService, ClientInboxService>();

            Container.Register<ISeed, BasicSeed>(nameof(BasicSeed));
            Container.Register<ISeed, ClientsSeed>(nameof(ClientsSeed));
            Container.Register<ISeed, FirmSeed>(nameof(FirmSeed));
            Container.Register<ISeed, PostSeed>(nameof(PostSeed));

            Container.Register<AppsUserManager>();
        }
    }
}