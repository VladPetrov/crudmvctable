using System;
using System.Collections.Generic;
using System.Text;
using BLL.Infrastructure;
using Domain;
using Domain.Inbox;

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
            return null;
        }
    }
}
