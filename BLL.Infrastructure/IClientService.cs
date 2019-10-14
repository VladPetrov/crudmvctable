using Domain.Client;

namespace BLL.Infrastructure
{
    public interface IClientService : IGenericCrudService<ClientDisplay, ClientDomain, string>
    {
    }
}
