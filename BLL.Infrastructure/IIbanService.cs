using Domain.Entity;
using Domain.Iban;

namespace BLL.Infrastructure
{
    public interface IIbanService : IGenericCrudService<IbanDisplay, IbanDomain, long>
    {
    }
}
