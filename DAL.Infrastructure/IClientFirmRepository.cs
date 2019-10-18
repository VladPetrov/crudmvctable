using Domain.Client;

namespace DAL.Infrastructure
{
    public interface IClientFirmRepository : IGenericCrudRepository<FirmDisplay, FirmDomain, string>
    {
    }
}
