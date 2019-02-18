using System.Linq;
using AutoMapper;
using Domain;
using Domain.List;
using NUnit.Framework;

namespace Test.DomainList
{
    [TestFixture]
    public class DomainListTest : Profile
    {
        private DomainListTestClass Item1 { get; set; }
        private DomainListTestClass Item2 { get; set; }
        private DomainListTestClass Item3 { get; set; }

        [Test]
        public void DomainListEqualsTest()
        {
            var testItem = new DomainListTestClass
            {
                Guid = Item1.Guid
            };

            Assert.IsTrue(Item1.Equals(testItem));  
            Assert.IsFalse(Item1.Equals(Item2));
        }

        [Test]
        public void DomainListAddTest()
        {
            var list = new DomainList<DomainListTestClass>(Item1);

            list.Add(Item1);
            list.Add(Item2);

            var res = list.GetMappingList().ToList();
           
            Assert.AreEqual(2, res.Count);
            Assert.IsTrue(Item1.ChangeType == ChangeType.UnChanged);
            Assert.IsTrue(Item2.ChangeType == ChangeType.Added);
        }

        [Test]
        public void DomainListDeleteTest()
        {
            var list = new DomainList<DomainListTestClass>(Item1, Item2);

            list.Add(Item3);

            list.Remove(Item2);
            list.Remove(Item3);

            var res = list.GetMappingList().ToList();

            Assert.AreEqual(2, res.Count);
            Assert.IsTrue(Item1.ChangeType == ChangeType.UnChanged);
            Assert.IsTrue(Item2.ChangeType == ChangeType.Deleted);
        }

        [Test]
        public void DomainListUpdateTest()
        {
            var list = new DomainList<DomainListTestClass>(Item1, Item2);
            
            list.Update(Item2);

            var res = list.GetMappingList().ToList();

            Assert.AreEqual(2, res.Count);
            Assert.IsTrue(Item1.ChangeType == ChangeType.UnChanged);
            Assert.IsTrue(Item2.ChangeType == ChangeType.Modified);
        }

        [SetUp]
        public void SetUp()
        {
            Item1 = new DomainListTestClass{Id = 1};
            Item2 = new DomainListTestClass{Id = 2};
            Item3 = new DomainListTestClass{Id = 3};
        }
    }
}
