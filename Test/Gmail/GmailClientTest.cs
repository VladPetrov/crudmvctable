using BLL.Infrastructure;
using NUnit.Framework;
using System;


namespace Test.Gmail
{
    [TestFixture]
    public class GmailClientTest
    {
        private IGmailService Client { get; set; }      

        [Test]
        public void GetUnreadMailsTest()
        {
            var allEmails = Client.GetNotSeen();

            foreach (var email in allEmails)
            {
                Console.WriteLine(email.Body);
            }
        }

        [SetUp]
        public void Init()
        {
            var fixture = new TestFixture();

            fixture.Initialize();

            Client = fixture.GetService<IGmailService>();
        }
    }
}
