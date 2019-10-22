using Common.Configuration;
using DAL.Model;
using Domain;
using System;
using System.Collections.Generic;

namespace DAL.DbManagers.Seeds
{
    public class ClientsSeed : AbstractSeed
    {
        public ClientsSeed(DataBase context) : base(context, SeedType.TestData, 1)
        {
        }

        protected override void DoSeed()
        {
            Context.Users.AddRange(
                new List<ApplicationUser>
                {
                    new ApplicationUser
                    {
                        UserType = UserType.Client,
                        Email = "test@test.com",
                        UserName = "test@test.com",
                        NormalizedUserName = "test@test.com".ToUpper(),
                        ClientProfile = new ClientProfile
                        {
                            Balance = 10000,
                            ContractStartDate = DateTime.Now,
                            ContractEndDate = DateTime.Now.AddMonths(1),
                            DefaultFirmName = "Google s.r.o.",

                            Firms = new List<ClientFirm>
                            {
                                new ClientFirm
                                {
                                    Name = "APLOT s.r.o.",
                                    Enabled = true,
                                },

                                new ClientFirm
                                {
                                    Name = "Demian Spavik – DamSi",
                                    Enabled = true,
                                },
                            }
                        }
                    },

                    new ApplicationUser
                    {
                        UserType = UserType.Client,
                        Email = "someEmail@gmail.com",
                        UserName = "someEmail@gmail.com",
                        NormalizedUserName = "someEmail@gmail.com".ToUpper(),
                        ClientProfile = new ClientProfile
                        {
                            Balance = 80000,
                            ContractStartDate = DateTime.Now.AddMonths(-2),
                            ContractEndDate = DateTime.Now.AddMonths(-1),
                            DefaultFirmName = "Amazon s.r.o.",

                            Firms = new List<ClientFirm>
                            {
                                new ClientFirm
                                {
                                    Name = "RYNA s.r.o.",
                                    Enabled = true,
                                },

                                new ClientFirm
                                {
                                    Name = "Aleshcheva, Anastasia",
                                    Enabled = true,
                                },
                            }
                        }
                    },
                });
        }
    }
}
