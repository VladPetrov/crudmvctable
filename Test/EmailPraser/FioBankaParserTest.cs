using System.Collections.Generic;
using System.Linq;
using BLL.ImportTransactions.EmailParser;
using Domain.Gmail;
using Domain.Transaction;
using NUnit.Framework;

namespace Test.EmailPraser
{
    [TestFixture]
    public class FioBankaParserTest
    {
        private FioBankaEmailParser Service { get; } = new FioBankaEmailParser();

        private readonly List<MessageDetails> _messages =new List<MessageDetails>();
        
        [Test]
        public void TransactiomParserService()
        {
            var trns = new List<TransactionDomain>();

            foreach (var message in _messages)
            {
                var result = Service.ParseEmail(message);
                Assert.IsTrue(result.Successful);
                trns.Add(result.Transaction);
            }

            Assert.AreEqual(8, trns.Count(x => x.Amount > 0));
            Assert.AreEqual(4, trns.Count(x => x.Iban != null));
            Assert.AreEqual(3, trns.Count(x => x.Note != null));

            Assert.AreEqual(21587, trns[0].Amount);
            Assert.AreEqual(3900, trns[1].Amount);
            Assert.AreEqual(15840, trns[2].Amount);
            Assert.AreEqual(239800, trns[3].Amount);
            Assert.AreEqual(138000, trns[4].Amount);
            Assert.AreEqual(591020, trns[5].Amount);
            Assert.AreEqual(42553, trns[6].Amount);
            Assert.AreEqual(10956, trns[7].Amount);
        }

        [SetUp]
        public void SetUp()
        {
            new TestFixture().Initialize();

            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 215,87\r\nVS: 2923\r\nUS:\r\nAktuální zůstatek: 26 376,14\r\nProtiúčet: platba kartou\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 39,00\r\nVS: 2923\r\nUS:\r\nAktuální zůstatek: 26 337,14\r\nProtiúčet: platba kartou\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 158,40\r\nVS:\r\nUS: YDS-banners\r\nAktuální zůstatek: 23 013,43\r\nProtiúčet: SK9211000000002944457031/\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 2 398,00\r\nVS:\r\nUS: KA2-IS-C3-Accomodation\r\nAktuální zůstatek: 19 234,66\r\nProtiúčet: RO13BACX0000001435593002/\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 1 380,00\r\nVS: 1020180014\r\nUS: YDS-Marketing Leel-web and social media management\r\nAktuální zůstatek: 21 633,43\r\nProtiúčet: 2201376097/2010\r\nSS:\r\nKS:");
            CreateMessage("Příjem na kontě: 2101090630\r\nČástka: 5 910,20\r\nVS:\r\nZpráva příjemci: /DO2018-09-17/SPCZ8101000001077363650207,DUM ZAHRANICNI SPOLUPRACE,2017-2-CZ01-KA105-035653,doplatek, 00002\r\nAktuální zůstatek: 30 022,86\r\nProtiúčet: SK3581000000001100003617/8100\r\nSS:\r\nKS:");
            CreateMessage("Příjem na kontě: 2101090630\r\nČástka: 425,53\r\nVS: 2923\r\nZpráva příjemci: Kredit: Etraveli.com,  Dragbrunnsgatan 46, Uppsala, 75320, FIN, dne 26.9.2018, částka  389.75 GBP\r\nAktuální zůstatek: 28 101,69\r\nProtiúčet: /\r\nSS:\r\nKS:");
            CreateMessage("Příjem na kontě: 2101090630\r\nČástka: 109,56\r\nVS: 2923\r\nZpráva příjemci: Kredit: AIRBNB * HMEK8ZNNE5,  34 Dover St 5th Floor, 203-318-1111, W1S 4NG, GBR, dne 28.9.2018, částka  109.56 EUR\r\nAktuální zůstatek: 27 260,37\r\nProtiúčet: /\r\nSS:\r\nKS:");

        }

        private void CreateMessage(string body)
        {
            _messages.Add(new MessageDetails
            {
                UniqueId = _messages.Count + 1,
                Subject = "Fio banka - vydaj na konte",
                From = "automat@fio.cz",
                Body = body,
            });
        }
    }
}
