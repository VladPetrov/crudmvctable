using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Client;

namespace BLL
{
    public class ClientFirmService : GenericCrudService<ClientFirmDisplay, ClientFirmDomain, string>, IClientFirmService
    {
        public ClientFirmService(IClientFirmRepository repository) : base(repository)
        {
        }
    }
}
