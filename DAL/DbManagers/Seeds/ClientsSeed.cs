using Common.Configuration;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Client;
using System;
using System.Collections.Generic;
using Common.StringConstants;
using DAL.Repositories;

namespace DAL.DbManagers.Seeds
{
    public class ClientsSeed : AbstractSeed
    {
        private IClientRepository Repository { get; }

        private AppsUserManager UserManager { get; }

        public ClientsSeed(DataBase context, IClientRepository repository, AppsUserManager userManager) : base(context, SeedType.TestData, 1)
        {
            Repository = repository;
            UserManager = userManager;
        }

        protected override void DoSeed()
        {
            GetUsers().ForEach(u => Repository.Upsert(u));

            SetPasswordForTestClient();
        }

        private List<ClientDomain> GetUsers()
        {
            return new List<ClientDomain>
                {
                    new ClientDomain
                    {
                        Email = Constants.TestClient,
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

        private void SetPasswordForTestClient()
        {
            var user = UserManager.FindByEmailAsync(Constants.TestClient).Result;

            UserManager.RemovePasswordAsync(user).Wait();

            UserManager.AddPasswordAsync(user, Constants.TestClientPassword).Wait();
        }
    }
}
