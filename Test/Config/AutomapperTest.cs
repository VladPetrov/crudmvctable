using Configuration.Mapping;
using NUnit.Framework;
using AutoMapper;

namespace Test.Config
{
    [TestFixture]
    public class AutomapperTest
    {
        [Test]
        public void AutomapperConfigTest()
        {
            MappingConfig.RegisterMappings();
            Mapper.AssertConfigurationIsValid();
        }
    }
}
