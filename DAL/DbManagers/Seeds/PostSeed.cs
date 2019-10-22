using Common.Configuration;
using DAL.Model;
using Domain.Post;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL.DbManagers.Seeds
{
    public class PostSeed : AbstractSeed
    {
        public PostSeed(DataBase context) : base(context, SeedType.TestData, 2)
        {
        }

        protected override void DoSeed()
        {
            var firms = Context.ClientFirms.ToList();

            Context.FirmPost.AddRange(new List<FirmPost>
            {
                new FirmPost
                {
                    DeliveredDate = DateTime.Now,
                    Firm = firms[0],
                    RegisteredBy = "Seed",
                    Status = LetterStatus.New,
                    Type = LetterType.Letter,
                    Note = "some note",
                    Sender = "Bratislava"
                },

                new FirmPost
                {
                    DeliveredDate = DateTime.Now,
                    Firm = firms[1],
                    RegisteredBy = "Seed",
                    Status = LetterStatus.ForwardedByEmail,
                    Type = LetterType.LetterFirstClass,
                    Note = null,
                    Sender = "Sumy"
                },

                new FirmPost
                {
                    DeliveredDate = DateTime.Now,
                    Firm = firms[2],
                    RegisteredBy = "Seed",
                    Status = LetterStatus.ForwardedByPost,
                    Type = LetterType.RegisteredLetter,
                    Note = "some note",
                    Sender = "Kosice"
                }
            });
        }
    }
}
