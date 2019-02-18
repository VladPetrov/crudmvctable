using System.Linq;
using Common;
using Common.Configuration;
using DAL.Model;
using Microsoft.EntityFrameworkCore;

namespace DAL.DbManagers
{
    public class MigrationManager
    {
        private DataBase Context { get; }

        public MigrationManager(DataBase context)
        {
            Context = context;
        }

        public void ApplyMigrations(IAppConfigurationProvider config)
        {
            Log.Logger().Information("Migration Manager is strating ....");

            var migrations = Context.Database.GetPendingMigrations().ToList();

            if (migrations.Any())
            {
                Log.Logger().Information("Found {number} pending migrations", migrations.Count);
                migrations.ForEach(m => Log.Logger().Information("{name}", m));

                if (config.ApplyMigrations)
                {
                    Log.Logger().Information("Migration is enabled");
                    Context.Database.Migrate();
                    Log.Logger().Information("Migration is applied ");
                }
                else
                {
                    Log.Logger().Information("Migration is disabled ");
                }
            }
            else
            {
                Log.Logger().Information("No migrations Found", migrations.Count);
            }
        }

        public void EnsureCreated(IAppConfigurationProvider config)
        {
            Context.Database.EnsureCreated();
        }
    }
}
