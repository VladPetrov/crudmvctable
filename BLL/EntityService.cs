using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Entity;

namespace BLL
{
    public class EntityService : GenericCrudServise<EntityDisplay, EntityDomain, long>, IEntityService
    {
        public EntityService(IEntityRepository repository) : base(repository)
        {
        }
    }
}
