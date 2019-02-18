using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;

namespace Test.GenericInfrastructure.GenericRepository
{
    [TestFixture]
    public class GenericRepositotyTest
    {
        private bool UseInMemoryDb => true;

        private GenericInfrastructureContext Context { get; set; }

        private TestRepository Repository { get; set; }

        [Test]
        public void GenericRepositoryGetByIdTest()
        {
            var item = Repository.GetById(1);

            Assert.NotNull(item);
            Assert.AreEqual(item.Id, 1);
        }

        [Test]
        public void GenericRepositoryDeletWithOutReferencesTest()
        {
            var usersInitialCount = Context.Users.Count();
            
            Repository.Delete(3);

            Assert.AreEqual(Context.Users.Count(), usersInitialCount - 1);
        }

        [Test]
        public void GenericRepositoryDeletWithReferencesTest()
        {
            var usersInitialCount = Context.Users.Count();

            var result = Repository.Delete(2);

            Assert.AreEqual(Context.Users.Count(), usersInitialCount);
            Assert.IsFalse(result.Success);
        }

        [Test]
        public void GenericRepositoryUpsertTest()
        {
            const string newName = "New First Name";
            const int userId = 1;

            var user = Repository.GetById(userId);

            Assert.AreNotEqual(newName, user.FirstName);

            user.FirstName = newName;
            
            Repository.Upsert(user);

            var updatedName = Context.Users.Where(x => x.Id == userId).Select(x => x.FirstName).First();

            Assert.AreEqual(newName, updatedName);
        }

        [Test]
        public void GenericRepositoryDomainListAddTest()
        {
            const int accountNumber = 11117859;
            const long userId = 1;

            Assert.AreEqual(Context.Users.First(x => x.Id == userId).Accounts.Count, 1);

            var user = Repository.GetById(userId);

            Assert.AreEqual(user.Accounts.Count, 1);
            
            user.Accounts.Add(new AccountDomain
            {
                AccountNumber = accountNumber
            });
            
            var resultUser = Repository.Upsert(user).Data;

            Assert.AreEqual(resultUser?.Accounts.Count, 2);
            Assert.AreEqual(resultUser?.Accounts.Count(x => x.AccountNumber == accountNumber), 1);

            var upadatedUser = Context.Users.First(x => x.Id == userId);

            Assert.AreEqual(upadatedUser.Accounts.Count(x => x.AccountNumber == accountNumber), 1);
            Assert.AreEqual(upadatedUser.Accounts.Count, 2);
        }

        [Test]
        public void GenericRepositoryDomainListDeleteTest()
        {
            const long userId = 2;

            Assert.AreEqual(Context.Users.First(x => x.Id == userId).Accounts.Count, 2);

            var user = Repository.GetById(userId);

            Assert.AreEqual(user.Accounts.Count, 2);

            var accountToDelete = user.Accounts.First();

            user.Accounts.Remove(accountToDelete);
            
            var resultUser = Repository.Upsert(user).Data;

            Assert.AreEqual(resultUser?.Accounts.Count, 1);
            
            var upadatedUser = Context.Users.First(x => x.Id == userId);
            
            Assert.AreEqual(upadatedUser.Accounts.Count, 1);
        }

        [Test]
        public void GenericRepositoryDomainListUpdateTest()
        {
            const long userId = 1;
            const string newBankName = "newBankName";
            
            var user = Repository.GetById(userId);

            Assert.AreEqual(user.Accounts.Count, 1);

            var account = user.Accounts.First();

            Assert.AreNotEqual(account.BankName, newBankName);

            account.BankName = newBankName;

            user.Accounts.Update(account);

            var resultUser = Repository.Upsert(user).Data;
            
            Assert.AreEqual(1, resultUser?.Accounts.Count);
            Assert.AreEqual(1, resultUser?.Accounts.Count(x => x.BankName == newBankName));

            var upadatedUser = Context.Users.First(x => x.Id == userId);

            Assert.AreEqual(1, upadatedUser.Accounts.Count(x => x.BankName == newBankName));
        }

        [SetUp]
        public void SetUp()
        {
            var fixture = new TestFixture();

            fixture.AddMappingProfile<GenericInfrastructureMappingProfile>();

            if (UseInMemoryDb)
            {
                fixture.UseInMemoryDatabase<GenericInfrastructureContext>();
            }
            else
            {
                fixture.UseDatabase<GenericInfrastructureContext>();
            }

            fixture.Services.AddScoped<TestRepository>();
            
            fixture.Initialize();
            
            Context = fixture.GetService<GenericInfrastructureContext>();

            Context.Database.EnsureDeleted();

            Context.Database.EnsureCreated();

            GenericInfrastructureDataInitializer.Init(Context);

            Repository = fixture.GetService<TestRepository>();

        }
    }
}
