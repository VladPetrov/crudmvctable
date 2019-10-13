using AutoMapper.QueryableExtensions;
using Common.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.Entity;
using System.Linq;

namespace DAL.Repositories
{
    public class EntityRepository : GenericCrudRepository<DataBase, Entity, EntityDisplay, EntityDomain, long>, IEntityRepository
    {
        public EntityRepository(DataBase context) : base(context){}

        public ValueObject FindEntityByIban(string iban)
        {
            if (string.IsNullOrEmpty(iban))
            {
                return null;
            }

            iban = iban.NormalizeIban();

            return Context
                .Entities
                .Where(x => x.Ibans.Any(y => y.IbanStr.EndsWith(iban))).ProjectTo<ValueObject>()
                .FirstOrDefault();
        }
    }
}
