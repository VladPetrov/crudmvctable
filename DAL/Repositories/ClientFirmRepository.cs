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
    }
}
