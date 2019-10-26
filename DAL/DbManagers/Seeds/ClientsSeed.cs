using Common.Configuration;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Client;
using System;
using System.Collections.Generic;

namespace DAL.DbManagers.Seeds
{
    public class ClientsSeed : AbstractSeed
    {
        private IClientRepository Repository { get; }

        public ClientsSeed(DataBase context, IClientRepository repository) : base(context, SeedType.TestData, 1)
        {
            Repository = repository;
        }

        protected override void DoSeed()
        {
            GetUsers().ForEach(u => Repository.Upsert(u));
        }

        private List<ClientDomain> GetUsers()
        {
            return new List<ClientDomain>
                {
                    new ClientDomain
                    {
                        Email = "test@test.com",
                        DefaultFirmName = "Google s.r.o.",
                        PhoneNumber = "123456",
                        Balance = 8000,
                        ContractStartDate = DateTime.Now,
                        ContractEndDate = DateTime.Now.AddDays(2)
                    },

                    new ClientDomain
                    {
                        Email = "Vlado@test.com",
                        DefaultFirmName = "Amazon s.r.o.",
                        PhoneNumber = "888 888 3452",
                        Balance = 100000,
                        ContractStartDate = DateTime.Now,
                        ContractEndDate = DateTime.Now.AddDays(20)
                    },
                };
        }
    }
}
