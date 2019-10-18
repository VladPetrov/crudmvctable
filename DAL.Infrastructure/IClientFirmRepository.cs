using Domain.Client;

namespace DAL.Infrastructure
{
    public interface IClientFirmRepository : IGenericCrudRepository<ClientFirmDisplay, ClientFirmDomain, string>
    {
    }
}
