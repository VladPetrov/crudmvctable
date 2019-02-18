using DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using Common.Configuration;
using Domain.Transaction;

namespace DAL.DbManagers.Seeds
{
    public class TransactionSeed : AbstractSeed
    {
        public TransactionSeed(DataBase context) : base(context, SeedType.TestData, 3)
        {
        }

        protected override void DoSeed()
        {
            var category = Context.Categories.First();
            var project = Context.Projects.First();
            var entity = Context.Entities.First();
            var recipientEntity = Context.Entities.Last();

            Context.Transactions.AddRange(new List<Transaction>
            {
                new Transaction
                {
                    CreatedTime = DateTime.Now.AddDays(-1),
                    Amount = 100,
                    Iban = "SK5930946u023850",
                    Note = "abstraction of information in REST",
                    Category = category,
                    Project = project,
                    //Files = new List<File>
                    //{
                    //    new File
                    //    {
                    //        FileName = "File 1",
                    //        BinaryData = new BinaryData{Content = new byte [] {0x80}}
                    //    },
                    //    new File
                    //    {
                    //        FileName = "File 2",
                    //        BinaryData = new BinaryData{Content = new byte [] {0x80}}
                    //    },
                    //},
                    Entity = entity,
                    RecipientEntity = recipientEntity,
                    Type = TransactionType.CardTransactions
                },

                new Transaction
                {
                    CreatedTime = DateTime.Now.AddMinutes(-68),
                    Amount = 100,
                    Iban = "SK5932346u020000",
                    Note = "If done poorly, that same API can feel difficult to use and understand",
                    Category = category,
                    Project = project,
                    //Files = new List<File>
                    //{
                    //    new File
                    //    {
                    //        FileName = "File 1",
                    //        BinaryData = new BinaryData{Content = new byte [] {0x80}}
                    //    },
                    //    new File
                    //    {
                    //        FileName = "File 2",
                    //        BinaryData = new BinaryData{Content = new byte [] {0x80}}
                    //    }
                    //},
                    Entity = entity,
                    RecipientEntity = recipientEntity,
                    Type = TransactionType.Fee
                },

                new Transaction
                {
                    CreatedTime = DateTime.Now.AddMinutes(-368),
                    Amount = 100,
                    Iban = "SK5930023533u0200",
                    Note = "REST Resource Naming Best Practices",
                    Category = category,
                    Project = project,
                    //Files = new List<File>
                    //{
                    //    new File
                    //    {
                    //        FileName = "File 1",
                    //        BinaryData = new BinaryData{Content = new byte [] {0x80}}
                    //    },
                    //    new File
                    //    {
                    //        FileName = "File 2",
                    //        BinaryData = new BinaryData{Content = new byte [] {0x80}}
                    //    },
                    //},
                    Entity = entity,
                    RecipientEntity = recipientEntity,
                    Type = TransactionType.CashDeposit
                }
            });
        }
    }
}
