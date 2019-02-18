using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace Test.Table
{
    [UsedImplicitly]
    internal class TableTestContext : DbContext
    {
        public TableTestContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Account> Accounts { get; set; }
    }
}