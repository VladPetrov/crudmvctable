using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Entity;

namespace BLL
{
    public class EntityService : GenericCrudService<EntityDisplay, EntityDomain, long>, IEntityService
    {
        public EntityService(IEntityRepository repository) : base(repository)
        {
        }
    }
}
