using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Entity;

namespace BLL
{
    public class EntityService : GenericCrudServise<EntityDisplay, EntityDomain>, IEntityService
    {
        public EntityService(IEntityRepository repository) : base(repository)
        {
        }
    }
}
