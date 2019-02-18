using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Common.Table;
using DAL.Extensions;
using NUnit.Framework;

namespace Test.Table
{
    public class TableOrder
    {
        private TableTestContext Context { get; set; }

        private bool UseInMemoryDb => true;

        [Test]
        public void TableOderTest()
        {
            var sort = SortOrder.CreateOrder<UserDisplay>(u => u.LastName, OrderDirection.Desc);
            var result = Context.Users.ApplyTableRequest<User, UserDisplay>(CreateTableRequest(null, sort)).Data;

            Assert.AreEqual(3, result.Count);

            var users = Context.Users.OrderBy(x => x.FirstName).ThenBy(x => x.LastName).ToList();

            //Assert.IsTrue(result[0].LastName == "E");
            //Assert.IsTrue(result[1].LastName == "F");
            //Assert.IsTrue(result[2].LastName == "G");

            //sort = SortOrder.CreateOrder<UserDisplay>(u => u.LastName, OrderDirection.Asc);
            //result = ApplyTableRequest(CreateTableRequest(null, sort)).Data;

            //Assert.AreEqual(3, result.Count);
            //Assert.IsTrue(result[2].LastName == "E");
            //Assert.IsTrue(result[1].LastName == "F");
            //Assert.IsTrue(result[0].LastName == "G");
        }

        [Test]
        public void TableOderWithDefaultOrderTest()
        {
            var sort = SortOrder.CreateOrder<UserDisplay>(u => u.LastName, OrderDirection.Asc);
            var result = Context.Users.ApplyTableRequest<User, UserDisplay>(CreateTableRequest(null, null), sort)
                .Data;

            Assert.AreEqual(3, result.Count);
            Assert.IsTrue(result[0].LastName == "E");
            Assert.IsTrue(result[1].LastName == "F");
            Assert.IsTrue(result[2].LastName == "G");

            sort = SortOrder.CreateOrder<UserDisplay>(u => u.LastName, OrderDirection.Desc);
            result = ApplyTableRequest(CreateTableRequest(null, sort)).Data;

            Assert.AreEqual(3, result.Count);
            Assert.IsTrue(result[2].LastName == "E");
            Assert.IsTrue(result[1].LastName == "F");
            Assert.IsTrue(result[0].LastName == "G");
        }

        [SetUp]
        public void SetUp()
        {
            var fixture = new TestFixture();

            fixture.AddMappingProfile<TableMappingProfile>();

            if (UseInMemoryDb)
            {
                fixture.UseInMemoryDatabase<TableTestContext>();
            }
            else
            {
                fixture.UseDatabase<TableTestContext>();
            }

            fixture.Initialize();

            Context = fixture.GetService<TableTestContext>();

            Context.Database.EnsureDeleted();

            Context.Database.EnsureCreated();

            TableOrderTestDataInitializer.Init(Context);
        }

        private ListResult<UserDisplay> ApplyTableRequest(ListRequest request)
        {
            return Context.Users.ApplyTableRequest<User, UserDisplay>(request);
        }

        private ListRequest CreateTableRequest(Filter filter, SortOrder sort)
        {
            var filters = filter != null ? new List<Filter> { filter } : new List<Filter>();
            var sortOders = sort != null ? new List<SortOrder> { sort } : new List<SortOrder>();

            return new ListRequest(filters, sortOders, 0, 0, true);
        }

    }
}
