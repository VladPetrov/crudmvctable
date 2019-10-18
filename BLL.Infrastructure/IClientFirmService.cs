using Domain.Client;

namespace BLL.Infrastructure
{
    public interface IClientFirmService : IGenericCrudService<FirmDisplay, FirmDomain, string>
    {
    }
}
