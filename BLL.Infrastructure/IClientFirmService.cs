using Domain.Client;

namespace BLL.Infrastructure
{
    public interface IClientFirmService : IGenericCrudService<ClientFirmDisplay, ClientFirmDomain, string>
    {
    }
}
