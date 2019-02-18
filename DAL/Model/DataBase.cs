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
        public DbSet<Message> Messages { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<TransactionTag> TransactionTags { get; set; }
        public DbSet<Entity> Entities { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<BinaryData> Binaries { get; set; }
        public DbSet<FileUploadLog> FileUploadLogs { get; set; }
        public DbSet<FileUploadLogError> FileUploadLogErrors { get; set; }
        public DbSet<TransactionThroughEmailImportInfo> TransactionThroughEmailImportInfo { get; set; }
        public DbSet<EntityProject> EntityProject { get; set; }
        public DbSet<TransactionFiles> TransactionFiles { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Transaction>()
                .HasIndex(r => r.Iban);

            builder.Entity<TransactionTag>()
                .HasIndex(r => r.Text);

            builder.Entity<TransactionFiles>()
                .HasOne(x => x.File)
                .WithOne()
                .HasForeignKey<TransactionFiles>(x => x.FileId);

            builder.Entity<TransactionFiles>()
                .HasOne(x => x.FilePreview)
                .WithOne()
                .HasForeignKey<TransactionFiles>(x => x.FilePreviewId);
        }

        private bool _transactionInProgress = false; //todo obselet code

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
