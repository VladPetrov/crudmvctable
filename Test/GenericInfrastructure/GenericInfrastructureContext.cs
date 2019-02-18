using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace Test.GenericInfrastructure
{
    [UsedImplicitly]
    internal class GenericInfrastructureContext : DbContext
    {
        public GenericInfrastructureContext(DbContextOptions<GenericInfrastructureContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Account> Accounts { get; set; }
    }
}