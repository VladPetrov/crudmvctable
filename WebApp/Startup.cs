using Common;
using Common.Configuration;
using Configuration;
using Configuration.IoC;
using Configuration.Mapping;
using DAL.DbManagers;
using DAL.Model;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Serilog;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Configuration.AppSettings;
using LightInject;
using LightInject.Microsoft.DependencyInjection;
using Microsoft.EntityFrameworkCore.Diagnostics;
using WebApp.Binders;
using WebApp.Filters;
using Log = Common.Log;


namespace WebApp
{
    [UsedImplicitly]
    public class Startup
    {
        private IAppConfigurationProvider ConfigurationProvider { get; }

        public Startup(IHostingEnvironment env)
        {
            try
            {
                var configuration = AppSettingsFileProvider.LoadConfiguration(env.ContentRootPath, env.EnvironmentName);

                ConfigurationProvider = new AppConfigurationProvider(configuration, env.ContentRootPath);

                LoggerConfig.Configure(ConfigurationProvider);
            }
            catch (Exception e)
            {
                var message = $"Application failed to start. Message: {e.Message}, StackTrace: {e.StackTrace}";
                Console.WriteLine(message);
                Log.Logger().Error(e, message);
                
                throw;
            }
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            try
            {
                ConfigureMvcServices(services);
                
                Log.Logger().Information("Configure Dependency Injection...");
                Ioc.Init(ConfigurationProvider);
                
                return Ioc.Container.CreateServiceProvider(services);
            }
            catch (Exception e)
            {
                Log.Logger().Error(e, "Application failed to start");

                throw;
            }
        }

        public void Configure(IApplicationBuilder app,
                              IHostingEnvironment env,
                              ILoggerFactory loggerFactory,
                              SeedManager seedManager,
                              MigrationManager migrationManager)
        {
            var stopwatch = Stopwatch.StartNew();

            try
            {
                loggerFactory.AddSerilog();
                Log.Logger().Information("Application is starting...");
                Log.Logger().Information("Configuration:");

                ConfigurationProvider.GetType().GetProperties().ToList().ForEach(prop =>
                {
                    Log.Logger().Information("[{name}] = '{value}'", prop.Name, prop.GetValue(ConfigurationProvider));
                });

                DateTimeContext.Initialize(ConfigurationProvider.TimeZone);

                Log.Logger().Information("Configure EF Mappings...");
                MappingConfig.RegisterMappings();

                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                    app.UseDatabaseErrorPage();
                }
                else
                {
                    app.UseExceptionHandler("/Home/Error");
                    app.UseHsts();
                }

                if (env.IsDevelopment())
                {
                    app.UseHttpsRedirection();
                }

                app.UseStaticFiles(new StaticFileOptions { FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot")) });
                app.UseSession();
                app.UseAuthentication();

                app.UseMvc(routes =>
                {
                    routes.MapRoute(name: "default", template: "{controller=Home}/{action=Index}/{id?}");
                    routes.MapRoute(name: "default2", template: "{controller=Home}/{action=Index}/{isReadonly?}");
                });

                //migrationManager.EnsureCreated(ConfigurationProvider);
                //migrationManager.ApplyMigrations(ConfigurationProvider);
                seedManager.Seed(ConfigurationProvider);
               
            }
            catch (Exception e)
            {
                Log.Logger().Error(e, "Application failed to start");

                throw;
            }
            finally
            {
                stopwatch.Stop();
                Log.Logger().Information("Startup time: {Seconds}s", stopwatch.Elapsed.Seconds);
            }
        }

        private void ConfigureMvcServices(IServiceCollection services)
        {
            Log.Logger().Information("Configure ApplicationContext...");
            //DbContextConfiguration.UseSqlDataBase<DataBase>(services, ConfigurationProvider);
            DbContextConfiguration.UseInMemoryDatabase<DataBase>(services, option => 
              option.ConfigureWarnings(y => y.Ignore(InMemoryEventId.TransactionIgnoredWarning)));

            Log.Logger().Information("Configure Identity...");
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<DataBase>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
                options.Password.RequiredUniqueChars = 3;

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromHours(1);
                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;

                // User settings
                options.User.RequireUniqueEmail = true;
            });

            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.HttpOnly = true;
                options.Cookie.Expiration = TimeSpan.FromDays(150);
                options.LoginPath = "/Account/Login";
                options.AccessDeniedPath = "/Account/AccessDenied";
                options.SlidingExpiration = true;
            });

            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromDays(1);
                options.Cookie.HttpOnly = true;
            });


            Log.Logger().Information("Configure MVC services...");
            var builder = services.AddMvc();

            builder.AddMvcOptions(x =>
            {
                //x.Filters.Add<AntiforgeryFilter>();
                x.Filters.Add(new GlobalExceptionHandler());
                x.ModelBinderProviders.Insert(0, new BinderProvider());
            });

            builder.AddControllersAsServices();
        }
    }
}