using System.Collections.Generic;
using System.Linq;
using Common.Table;
using DAL.Extensions;
using NUnit.Framework;

namespace Test.Table
{
    [TestFixture]
    public class TableFilter
    {
        private TableTestContext Context { get; set; }

        [Test]
        public void StringFilterTest()
        {
            var filter = new Filter
            {
                Operator = FilterOperator.Equal,
                Encrypted = false,
                Group = "",
                Type = FilterType.String,
                FieldId = "FirstName",
                Value = "Vasia"
            };

            var result = ApplyTableRequest(CreateTableRequest(filter, null));

            Assert.True(result.Data.Count == 1);
        }

        [Test]
        public void BoolFilterTest()
        {
            var filter = new Filter
            {
                Operator = FilterOperator.Equal,
                Encrypted = false,
                Group = "",
                Type = FilterType.Boolean,
                FieldId = "IsAdmin",
                Value = "true"
            };

            var result = ApplyTableRequest(CreateTableRequest(filter, null));

            Assert.True(result.Data.Count == 1);
        }

        [SetUp]
        public void SetUp()
        {
            var fixture = new TestFixture();

            fixture.AddMappingProfile<TableMappingProfile>();

            fixture.UseInMemoryDatabase<TableTestContext>();

            fixture.Initialize();

            Context = fixture.GetService<TableTestContext>();

            TableFilterTestDataInitializer.Init(Context);
        }

        private ListResult<UserDisplay> ApplyTableRequest(ListRequest request)
        {
            return Context.Users.ApplyTableRequest<User, UserDisplay, long>(request);
        }

        private ListRequest CreateTableRequest(Filter filter, SortOrder sort)
        {
            var filters = filter != null ? new List<Filter> {filter} : new List<Filter>();
            var sortOders = sort != null ? new List<SortOrder> {sort} : new List<SortOrder>();

            return new ListRequest(filters, sortOders, 0, 0, true);
        }
    }
}