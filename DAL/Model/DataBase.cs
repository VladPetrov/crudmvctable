using System;
using System.Data;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DAL.Model
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class DataBase : IdentityDbContext<ApplicationUser>
    {
        public DataBase(DbContextOptions<DataBase> options) : base(options)
        {
        }
        public DbSet<Seed> Seeds { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<BinaryData> Binaries { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<ClientProfile> ClientProfiles { get; set; }
        public DbSet<ClientFirm> ClientFirms { get; set; }
        public DbSet<ClientDeliveryAddress> ClientDeliveryAddresses { get; set; }
        public DbSet<ClientAuthorizedPersons> ClientAuthorizedPersons { get; set; }
        public DbSet<FirmPost> FirmPost { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

        }

        private bool _transactionInProgress = false; //todo obsolete code

        [Obsolete]
        public void DoInTransaction([NotNull] Action action,
            IsolationLevel isolationLevel = IsolationLevel.RepeatableRead)
        {
            if (_transactionInProgress)
            {
                action.Invoke();
            }
            else
            {
                _transactionInProgress = true;
                try
                {
                    using (var transaction = Database.BeginTransaction(isolationLevel))
                    {
                        action.Invoke();

                        transaction.Commit();
                    }
                }
                finally
                {
                    _transactionInProgress = false;
                }
            }
        }

        public T DoInTransaction<T>([NotNull] Func<T> action,
            IsolationLevel isolationLevel = IsolationLevel.RepeatableRead)
        {
            T result;

            if (_transactionInProgress)
            {
                result = action.Invoke();
            }
            else
            {
                _transactionInProgress = true;
                try
                {
                    using (var transaction = Database.BeginTransaction(isolationLevel))
                    {
                        result = action.Invoke();

                        transaction.Commit();
                    }
                }
                finally
                {
                    _transactionInProgress = false;
                }
            }

            return result;
        }
    }
}
