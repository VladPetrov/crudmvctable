using Domain.Entity;
using Domain.Iban;

namespace DAL.Infrastructure
{
    public interface IIbanRepository : IGenericCrudRepository<IbanDisplay, IbanDomain>
    {
    }
}
