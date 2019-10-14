using Domain;
using Domain.Entity;

namespace DAL.Infrastructure
{
    public interface IEntityRepository : IGenericCrudRepository<EntityDisplay, EntityDomain, long>
    {
        ValueObject FindEntityByIban(string iban);
    }
}
