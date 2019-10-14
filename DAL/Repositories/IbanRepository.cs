using Common.Extensions;
using DAL.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.Iban;
using Optional.Unsafe;

namespace DAL.Repositories
{
    public class IbanRepository : GenericCrudRepository<DataBase, Iban, IbanDisplay, IbanDomain, long>, IIbanRepository
    {
        public IbanRepository(DataBase context) : base(context)
        {
        }

        public override UpsertResult<IbanDomain> Upsert(IbanDomain domain)
        {
            domain.IbanStr = domain.IbanStr?.Replace(" ", "");

            var saved = Set
                .FindOptional(domain.Id)
                .CreateIfNone()
                .MapFrom(domain)
                .MatchNew<Iban, long>(entity => Set.Add(entity))
                .Do(Context.SaveChanges)
                .Map(entity => GetById(entity.Id))
                .ValueOrFailure();

            return UpsertResult<IbanDomain>.Ok(saved);
        }
    }
}
