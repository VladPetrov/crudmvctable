using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Client;

namespace BLL
{
    public class ClientFirmService : GenericCrudService<FirmDisplay, FirmDomain, string>, IClientFirmService
    {
        public ClientFirmService(IClientFirmRepository repository) : base(repository)
        {
        }
    }
}
