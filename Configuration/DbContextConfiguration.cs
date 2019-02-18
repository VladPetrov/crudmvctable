using System;
using Common.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Configuration
{
    public static class DbContextConfiguration
    {
        public static void UseSqlDataBase<T>(IServiceCollection services, IAppConfigurationProvider configurationProvider, Action<DbContextOptionsBuilder> optionsAction = null)
            where T : DbContext
        {
            services.AddEntityFrameworkSqlServer()
                .AddDbContext<T>(options =>
                {
                    options.UseSqlServer(configurationProvider.ConnectionString);
                    optionsAction?.Invoke(options);
                });
        }

        public static void UseInMemoryDatabase<T>(IServiceCollection services, Action<DbContextOptionsBuilder> optionsAction = null) where T : DbContext
        {
            services.AddDbContext<T>(options =>
            {
                options.UseInMemoryDatabase(typeof(T).Name);
                optionsAction?.Invoke(options);
            });
        }
    }
}
