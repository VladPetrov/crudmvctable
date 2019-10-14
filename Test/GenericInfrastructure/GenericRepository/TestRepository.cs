using DAL.Repositories;
using JetBrains.Annotations;

namespace Test.GenericInfrastructure.GenericRepository
{
    [UsedImplicitly]
    internal class TestRepository : GenericCrudRepository<GenericInfrastructureContext, User, UserDisplay, UserDomain, long>
    {
        public TestRepository(GenericInfrastructureContext context) : base(context)
        {
            ReferenceChecker.RegisterReferences(new Reference<Account, long>(account => account.UserId));
        }
    }
}
