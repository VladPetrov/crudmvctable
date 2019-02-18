using System;
using System.Collections.Generic;
using System.Linq;
using BLL.Infrastructure;
using Common;
using Common.Configuration;
using Domain.Gmail;
using MailKit;
using MailKit.Net.Imap;
using MailKit.Search;

namespace BLL
{ 
    public class GmailService : IGmailService
    {
        private IAppConfigurationProvider Config { get; }

        public GmailService(IAppConfigurationProvider config)
        {
            Config = config;
        }

        public IEnumerable<MessageDetails> GetNotSeen(bool markAsSeen = true)
        {
            return GetEmails(SearchQuery.NotSeen, markAsSeen);
        }

        public IEnumerable<MessageDetails> GetAll(bool markAsSeen = true)
        {
            return GetEmails(SearchQuery.All, markAsSeen);
        }

        public IEnumerable<MessageDetails> GetAllWithIdGreaterThan(long id, bool markAsSeen = true)
        {
            return GetEmails(SearchQuery.All, markAsSeen, id);
        }

        private IEnumerable<MessageDetails> GetEmails(SearchQuery query, bool markAsSeen, long threshold = 0)
        {
            try
            {
                var messages = new List<MessageDetails>();

                using (var client = CreateClient())
                {
                    var inbox = client.Inbox;

                    inbox.Open(FolderAccess.ReadWrite);

                    var results = inbox.Search(SearchOptions.All, query);

                    var ids = threshold > 0 ? results.UniqueIds.Where(x => x.Id > threshold) : results.UniqueIds;

                    foreach (var uniqueId in ids)
                    {
                        var message = inbox.GetMessage(uniqueId);

                        messages.Add(new MessageDetails
                        {
                            UniqueId = uniqueId.Id,
                            Subject = message.Subject,
                            From = message.From.Select(x => x.Name).First(),
                            Body = message.TextBody,
                            Date = message.Date
                        });

                        if (markAsSeen)
                        {
                            inbox.AddFlags(uniqueId, MessageFlags.Seen, true);
                        }                    
                    }

                    client.Disconnect(true);
                }

                return messages;
            }
            catch (Exception e)
            {
                Log.Logger().Error(e, "ImapClient failed");
                throw;
            }
        }

        private ImapClient CreateClient()
        {
            var client = new ImapClient();

            client.ServerCertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) =>
            {
                return true; //accept all certificates
            };

            client.Connect(Config.MailServer, Config.MailServerPort, Config.MailServerSsl);

            // Note: since we don't have an OAuth2 token, disable
            // the XOAUTH2 authentication mechanism.
            client.AuthenticationMechanisms.Remove("XOAUTH2");

            client.Authenticate(Config.MailServerUser, Config.MailServerPassword);

            return client;
        }
    }

    public class FakeGmailService : IGmailService
    {
        private readonly List<MessageDetails> _messages = new List<MessageDetails>();

        public IEnumerable<MessageDetails> GetNotSeen(bool markAsSeen = true)
        {
            return Items();
        }

        public IEnumerable<MessageDetails> GetAll(bool markAsSeen = true)
        {
            return Items();
        }

        public IEnumerable<MessageDetails> GetAllWithIdGreaterThan(long id, bool markAsSeen = true)
        {
            return Items();
        }

        private IEnumerable<MessageDetails> Items()
        {
            if (_messages.Any())
            {
                return _messages;
            }

            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 215,87\r\nVS: 2923\r\nUS:\r\nAktuální zůstatek: 26 376,14\r\nProtiúčet: platba kartou\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 39,00\r\nVS: 2923\r\nUS:\r\nAktuální zůstatek: 26 337,14\r\nProtiúčet: platba kartou\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 158,40\r\nVS:\r\nUS: YDS-banners\r\nAktuální zůstatek: 23 013,43\r\nProtiúčet: SK9211000000002944457031/\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 2 398,00\r\nVS:\r\nUS: KA2-IS-C3-Accomodation\r\nAktuální zůstatek: 19 234,66\r\nProtiúčet: RO13BACX0000001435593002/\r\nSS:\r\nKS:");
            CreateMessage("Výdaj na kontě: 2101090630\r\nČástka: 1 380,00\r\nVS: 1020180014\r\nUS: YDS-Marketing Leel-web and social media management\r\nAktuální zůstatek: 21 633,43\r\nProtiúčet: 2201376097/2010\r\nSS:\r\nKS:");
            CreateMessage("Příjem na kontě: 2101090630\r\nČástka: 5 910,20\r\nVS:\r\nZpráva příjemci: /DO2018-09-17/SPCZ8101000001077363650207,DUM ZAHRANICNI SPOLUPRACE,2017-2-CZ01-KA105-035653,doplatek, 00002\r\nAktuální zůstatek: 30 022,86\r\nProtiúčet: SK3581000000001100003617/8100\r\nSS:\r\nKS:");
            CreateMessage("Příjem na kontě: 2101090630\r\nČástka: 425,53\r\nVS: 2923\r\nZpráva příjemci: Kredit: Etraveli.com,  Dragbrunnsgatan 46, Uppsala, 75320, FIN, dne 26.9.2018, částka  389.75 GBP\r\nAktuální zůstatek: 28 101,69\r\nProtiúčet: /\r\nSS:\r\nKS:");
            CreateMessage("Příjem na kontě: 2101090630\r\nČástka: 109,56\r\nVS: 2923\r\nZpráva příjemci: Kredit: AIRBNB * HMEK8ZNNE5,  34 Dover St 5th Floor, 203-318-1111, W1S 4NG, GBR, dne 28.9.2018, částka  109.56 EUR\r\nAktuální zůstatek: 27 260,37\r\nProtiúčet: /\r\nSS:\r\nKS:");

            return _messages;
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
