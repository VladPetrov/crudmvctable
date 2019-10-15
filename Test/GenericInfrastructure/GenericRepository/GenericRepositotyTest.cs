using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;

namespace Test.GenericInfrastructure.GenericRepository
{
    [TestFixture]
    public class GenericRepositotyTest
    {
        private bool UseInMemoryDb => false;

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
