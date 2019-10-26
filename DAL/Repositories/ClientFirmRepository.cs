using System.Linq;
using Common.Table;
using DAL.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.Client;

namespace DAL.Repositories
{
    public class ClientFirmRepository : GenericCrudRepository<DataBase, ClientFirm, FirmDisplay, FirmDomain, string>, IClientFirmRepository
    {
        private static readonly object UpsertLockObj = new object();

        public ClientFirmRepository(DataBase context) : base(context)
        {
        }

        public override ListResult<FirmDisplay> List(ListRequest request)
        {
            return Set.Where(x => x.FirmType == FirmType.Additional).ApplyTableRequest<ClientFirm, FirmDisplay, string>(request);
        }

        public override UpsertResult<FirmDomain> Upsert(FirmDomain domain)
        {
            lock (UpsertLockObj)
            {
                if (domain.IsNew && !Context.FirmNameIsUnique(domain.Name))
                {
                    return UpsertResult<FirmDomain>.Error($"Firm name '{domain.Name}' already exists");
                }
            
                if(!domain.IsNew)
                {
                    var firm = Context.ClientFirms.Single(x => x.Id == domain.Id);

                    if (firm.Name != domain.Name && !Context.FirmNameIsUnique(domain.Name, firm.Id))
                    {
                        return UpsertResult<FirmDomain>.Error($"Firm name '{domain.Name}' already exists");
                    }
                }
            
                return base.Upsert(domain);
            }
        }
    }
}
