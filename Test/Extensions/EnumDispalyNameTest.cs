using NUnit.Framework;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using Common.Extensions;

namespace Test.Pdf
{
    [TestFixture]
    public class EnumDispalyNameTest
    {
        private enum TestEnum
        {
            [Display(Name = "some other str")]
            EnumOne,

            EnumTwo
        }

        [Test]
        public void DisplayName()
        {
            var name = TestEnum.EnumOne.GetDisplayName();

            Assert.AreEqual("some other str", name);

            name = TestEnum.EnumTwo.GetDisplayName();

            Assert.AreEqual("Enum Two", name);
        }
    }
}
