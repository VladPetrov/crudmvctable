using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper.QueryableExtensions;
using BLL.Infrastructure;
using Common;
using DAL.Model;
using Domain;
using Domain.Client;
using Domain.Inbox;
using Domain.Post;

namespace BLL
{
    public class ClientInboxService : IClientInboxService
    {
        private DataBase Context { get; }

        public ClientInboxService(DataBase context)
        {
            Context = context;
        }
        
        public FirmsInfo GetFirms(string userId)
        {
            Defensive.AssertTrue(Context.Users.Where(x => x.Id == userId).Select(x => x.UserType).Single() == UserType.Client);

            return new FirmsInfo
            {
                DefaultFirm = Context.ClientFirms
                    .Where(x => x.Profile.Id == userId && x.FirmType == FirmType.Default)
                    .ProjectTo<ValueObjectStrKey>()
                    .Single(),

                AdditionalFirms = Context.ClientFirms
                    .Where(x => x.Profile.Id == userId && x.FirmType == FirmType.Additional)
                    .ProjectTo<ValueObjectStrKey>()
                    .ToList()
            };
        }

        public List<LetterInfo> GetLetters(string firmId, string userId)
        {
            return new List<LetterInfo>
            {
                new LetterInfo
                {
                    DeliveredDate = DateTime.Today,
                    Recipient = "some address",
                    Sender = "Canada",
                    Type = LetterType.Letter,
                    Note = "slkjdflkd ldskf dfsgfkj sdfg "
                },

                new LetterInfo
                {
                    DeliveredDate = DateTime.Today.AddDays(-5),
                    Recipient = "som other address",
                    Sender = "USA",
                    Type = LetterType.LetterFirstClass
                }
            };
        }

        public List<LetterInfo> GetForwarded(string userId)
        {
            return new List<LetterInfo>
            {
                new LetterInfo
                {
                    DeliveredDate = DateTime.Today,
                    Recipient = "some address",
                    Sender = "Canada",
                    Type = LetterType.Letter,
                    Note = "slkjdflkd ldskf dfsgfkj sdfg "
                },

                new LetterInfo
                {
                    DeliveredDate = DateTime.Today.AddDays(-5),
                    Recipient = "som other address",
                    Sender = "USA",
                    Type = LetterType.LetterFirstClass
                }
            };
        }
    }
}
