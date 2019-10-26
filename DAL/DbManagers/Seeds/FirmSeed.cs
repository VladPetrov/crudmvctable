using Common.Configuration;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Client;
using System.Collections.Generic;
using System.Linq;

namespace DAL.DbManagers.Seeds
{
    public class FirmSeed : AbstractSeed
    {
        private IClientFirmRepository Repository { get; }

        public FirmSeed(DataBase context, IClientFirmRepository repository) : base(context, SeedType.TestData, 2)
        {
            Repository = repository;
        }

        protected override void DoSeed()
        {
            GetFirms().ForEach(f => Repository.Upsert(f));
        }

        private List<FirmDomain> GetFirms()
        {
            var clientProfileIds = Context.ClientProfiles.Select(x => x.Id).ToList();

            return new List<FirmDomain>
            {
                new FirmDomain
                {
                    Name = "APLOT s.r.o.",
                    MusterEntityFk = clientProfileIds[0]
                },
                new FirmDomain
                {
                    Name = "Demian Spavik – DamSi",
                    MusterEntityFk = clientProfileIds[0]
                },

                new FirmDomain
                {
                    Name = "Aleshcheva, Anastasiar",
                    MusterEntityFk = clientProfileIds[1]
                },
                new FirmDomain
                {
                    Name = "RYNA s.r.o",
                    MusterEntityFk = clientProfileIds[1]
                }
            };
        }
    }
}
