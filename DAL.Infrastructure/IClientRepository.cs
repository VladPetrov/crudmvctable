using Domain.Client;

namespace DAL.Infrastructure
{
    public interface IClientRepository : IGenericCrudRepository<ClientDisplay, ClientDomain, string>
    {
    }
}
