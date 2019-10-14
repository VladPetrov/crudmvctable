using BLL;
using BLL.ImportTransactions;
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
            Container.Register<IMessageRepository, MessageRepository>();
            Container.Register<ISubMessageRepository, SubMessageRepository>();
            Container.Register<ITransactionRepository, TransactionRepository>();
            Container.Register<ITransactionTagRepository, TransactionTagRepository>();
            Container.Register<IProjectRepository, ProjectRepository>();
            Container.Register<ICategoryRepository, CategoryRepository>();
            Container.Register<IValueObjectRepository, ValueObjectRepository>();
            Container.Register<IFileRepository, FileRepository>();
            Container.Register<IFileUploadLogger, FileUploadLogger>();
            Container.Register<ITransactionThroughEmailInfoRepository, TransactionThroughEmailInfoRepository>();
            Container.Register<IEntityRepository, EntityRepository>();
            Container.Register<IIbanRepository, IbanRepository>();
            Container.Register<IEntityProjectManyToManyServiceTr, EntityProjectManyToManyServiceTr>();
            Container.Register<ISubCategoryRepository, SubCategoryRepository>();

            Container.Register<DataBase>(new PerRequestLifeTime());
            Container.Register<TransientDataBase>();

            Container.Register<ThreadManagerService>();


            Container.Register<SeedManager>();
            Container.Register<MigrationManager>();
            Container.Register<ITransactionManager, TransactionManager>();

            Container.Register<IMessageService, MessageService>();
            Container.Register<ISubMessageService, SubMessageService>();
            Container.Register<ITransactionService, TransactionService>();
            Container.Register<ITransactionTagService, TransactionTagService>();
            Container.Register<IGmailService, GmailService>();
            Container.Register<IImportTransactionsEmailService, ImportTransactionsEmailService>();
            Container.Register<IProjectService, ProjectService>();
            Container.Register<ICategoryService, CategoryService>();
            Container.Register<IFileService, FileService>();
            Container.Register<ITransactionCsvImportService, TransactionCsvImportService>();
            Container.Register<IEntityService, EntityService>();
            Container.Register<IIbanService, IbanService>();
            Container.Register<ISubCategoryService, SubCategoryService>();
            Container.Register<IEndBalanceService, EndBalanceServiceTr>();
            Container.Register<ScriptsResolveService, ScriptsResolveService>();
            Container.Register<IClientService, ClientServiceTr>();

            Container.Register<ISeed, BasicSeed>(nameof(BasicSeed));
            Container.Register<ISeed, EntitySeed>(nameof(EntitySeed));
            Container.Register<ISeed, ProjectSeed>(nameof(ProjectSeed));
            //Container.AddTransient<ISeed, MessageSeed>(nameof(MessageSeed));   
            Container.Register<ISeed, TransactionSeed>(nameof(TransactionSeed));
            Container.Register<ISeed, CategorySeed>(nameof(CategorySeed));

            Container.Register<AppsUserManager>();
        }
    }
}