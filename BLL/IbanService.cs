using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Entity;
using Domain.Iban;

namespace BLL
{
    public class IbanService : GenericCrudServise<IbanDisplay, IbanDomain, long>, IIbanService
    {
        public IbanService(IIbanRepository repository) : base(repository)
        {
        }
    }
}
