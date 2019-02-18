using Domain;
using Domain.Entity;

namespace DAL.Infrastructure
{
    public interface IEntityRepository : IGenericCrudRepository<EntityDisplay, EntityDomain>
    {
        ValueObject FindEntityByIban(string iban);
    }
}
