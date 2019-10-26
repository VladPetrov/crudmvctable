using System;
using System.Collections.Generic;
using System.Text;
using BLL.Infrastructure;
using Domain;
using Domain.Inbox;
using Domain.Post;

namespace BLL
{
    public class ClientInboxService : IClientInboxService
    {
        public FirmsInfo GetFirms(string userId)
        {
            return new FirmsInfo
            {
                DefaultFirm = new ValueObjectStrKey
                {
                    Name = "Vlado s.r.o",
                    Id = Guid.NewGuid().ToString()
                },

                AdditionalFirms = new List<ValueObjectStrKey>
                {
                    new ValueObjectStrKey
                    {
                        Name = "Google s.r.o",
                        Id = Guid.NewGuid().ToString()
                    },

                    new ValueObjectStrKey
                    {
                        Name = "Amazon s.r.o",
                        Id = Guid.NewGuid().ToString()
                    }
                }
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
