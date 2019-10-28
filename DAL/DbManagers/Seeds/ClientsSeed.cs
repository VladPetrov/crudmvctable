using Common.Configuration;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Client;
using System;
using System.Collections.Generic;
using Common.StringConstants;
using DAL.Repositories;
using Domain;
using Domain.ProfileSettings;

namespace DAL.DbManagers.Seeds
{
    public class ClientsSeed : AbstractSeed
    {
        private IClientRepository Repository { get; }
        private AppsUserManager UserManager { get; }
        private IProfileSettingsRepository SettingsRepository { get; }

        public ClientsSeed(DataBase context, IClientRepository repository, AppsUserManager userManager, IProfileSettingsRepository settingsRepository) : base(context, SeedType.TestData, 1)
        {
            Repository = repository;
            UserManager = userManager;
            SettingsRepository = settingsRepository;
        }

        protected override void DoSeed()
        {
            GetUsers().ForEach(u => Repository.Upsert(u));

            SetPasswordForTestClient();
            SetAddressForTestClient();
        }

        private void SetAddressForTestClient()
        {
            var user = UserManager.FindByEmailAsync(Constants.TestClient).Result;

            SettingsRepository.UpsertDeliveryAddress(new DeliveryAddressDomain
            {
                Id = user.Id,
                City = "Bratislava",
                Country = new ValueObject { Id = 33},
                Name = "Vlado",
                PostalCode = "18 104",
                StreetAndNumber = "Prievozska 84"
            });
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
