using System.Linq;
using Common.Table;
using DAL.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Client;

namespace DAL.Repositories
{
    public class ClientFirmRepository : GenericCrudRepository<DataBase, ClientFirm, FirmDisplay, FirmDomain, string>, IClientFirmRepository
    {
        public ClientFirmRepository(DataBase context) : base(context)
        {
        }

        public override ListResult<FirmDisplay> List(ListRequest request)
        {
            return Set.Where(x => x.FirmType == FirmType.Additional).ApplyTableRequest<ClientFirm, FirmDisplay, string>(request);
        }
    }
}
