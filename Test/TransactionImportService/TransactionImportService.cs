using BLL.Infrastructure;
using DAL.Model;
using NUnit.Framework;
using System.Linq;

namespace Test.TransactionImportService
{
    [TestFixture]
    public class TransactionImportServiceTest
    {
        private IImportTransactionsEmailService Service { get; set; }

        private DataBase Context { get; set; }

        [Test]
        public void TransactionImportTest()
        {
            var before = Context.Transactions.Count();
            Service.ImportTransactions();
            var after = Context.Transactions.Count();

            Assert.IsTrue(after > before);
        }

        [SetUp]
        public void Init()
        {
            var fixture = new TestFixture();

            fixture.UseInMemoryDatabase<DataBase>();

            fixture.Initialize();

            Service = fixture.GetService<IImportTransactionsEmailService>();
            Context = fixture.GetService<DataBase>();
        }
    }
}
