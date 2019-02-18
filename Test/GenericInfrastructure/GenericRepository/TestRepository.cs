using System;
using System.Linq.Expressions;
using DAL.Repositories;
using JetBrains.Annotations;

namespace Test.GenericInfrastructure.GenericRepository
{
    [UsedImplicitly]
    internal class TestRepository : GenericCrudRepository<GenericInfrastructureContext, User, UserDisplay, UserDomain>
    {
        public TestRepository(GenericInfrastructureContext context) : base(context)
        {
            ReferenceChecker.RegisterReferences(new Reference<Account>(account => account.UserId));
        }
    }
}
