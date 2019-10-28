using Common.Configuration;
using DAL.Model;
using Domain.Post;
using System;
using System.Collections.Generic;
using System.Linq;
using FirmPost = DAL.Model.FirmPost;

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

            for (int i = 0; i < 600; i++)
            {
                Context.FirmPost.AddRange(new List<FirmPost>
                {
                    new FirmPost
                    {
                        DeliveredDate = DateTime.Now.AddDays(-i),
                        Firm = firms[0],
                        RegisteredBy = "Admin",
                        Status = LetterStatus.New,
                        Type = LetterType.Letter,
                        Note = "some note",
                        Sender = "Bratislava"
                    },

                    new FirmPost
                    {
                        DeliveredDate = DateTime.Now.AddDays(-i*2),
                        Firm = firms[1],
                        RegisteredBy = "Vlado",
                        Status = LetterStatus.ForwardedByEmail,
                        Type = LetterType.LetterFirstClass,
                        Note = null,
                        Sender = "Sumy"
                    },

                    new FirmPost
                    {
                        DeliveredDate = DateTime.Now.AddDays(-4),
                        Firm = firms[2],
                        RegisteredBy = "Den",
                        Status = LetterStatus.New,
                        Type = LetterType.RegisteredLetter,
                        Note = "some note",
                        Sender = "Kosice"
                    },
                    new FirmPost
                    {
                        DeliveredDate = DateTime.Now.AddDays(-4),
                        Firm = firms[3],
                        RegisteredBy = "Den",
                        Status = LetterStatus.New,
                        Type = LetterType.RegisteredLetter,
                        Note = "some note",
                        Sender = "Kosice"
                    },
                    new FirmPost
                    {
                        DeliveredDate = DateTime.Now.AddDays(-4),
                        Firm = firms[4],
                        RegisteredBy = "Den",
                        Status = LetterStatus.New,
                        Type = LetterType.RegisteredLetter,
                        Note = "some note",
                        Sender = "Kosice"
                    },
                    new FirmPost
                    {
                        DeliveredDate = DateTime.Now.AddDays(-4),
                        Firm = firms[5],
                        RegisteredBy = "Den",
                        Status = LetterStatus.New,
                        Type = LetterType.RegisteredLetter,
                        Note = "some note",
                        Sender = "Kosice"
                    }
                });
            }
        }
    }
}
