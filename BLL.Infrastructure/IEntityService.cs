using Domain.Entity;

namespace BLL.Infrastructure
{
    public interface IEntityService : IGenericCrudService<EntityDisplay, EntityDomain, long>
    {
    }
}
