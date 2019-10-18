using DAL.Infrastructure;
using DAL.Model;
using Domain.Client;

namespace DAL.Repositories
{
    public class ClientFirmRepository : GenericCrudRepository<DataBase, ClientFirm, ClientFirmDisplay, ClientFirmDomain, string>, IClientFirmRepository
    {
        public ClientFirmRepository(DataBase context) : base(context)
        {
        }
    }
}
