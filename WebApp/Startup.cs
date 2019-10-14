using Common;
using Common.Configuration;
using Configuration;
using Configuration.AppSettings;
using Configuration.IoC;
using Configuration.Mapping;
using DAL.DbManagers;
using DAL.Model;
using JetBrains.Annotations;
using LightInject.Microsoft.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Serilog;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using WebApp.Binders;
using WebApp.Controllers;
using WebApp.Extensions;
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
                    app.UseExceptionHandler("/Home/Error"); //todo IS incorrect page diesnt exist yet!!
                    app.UseHsts();
                    app.UseHttpsRedirection();
                }
                
                app.UseStaticFiles(new StaticFileOptions { FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot")) });
                app.UseSession();
                app.UseAuthentication();

                app.UseMvc(routes =>
                {
                    routes.MapRoute(name: "Area", template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");
                    routes.MapRoute(name: "Area2", template: "{area:exists}/{controller=Home}/{action=Index}/{isReadonly?}");
                   
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
                options.LoginPath = $"/{nameof(AccountController).ToControllerName()}/{nameof(AccountController.Login)}"; 
                options.AccessDeniedPath = $"/{nameof(AccountController).ToControllerName()}/{nameof(AccountController.AccessDenied)}";
                options.SlidingExpiration = true;
            });

            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromDays(1);
                options.Cookie.HttpOnly = true;
            });

            Log.Logger().Information("Configure MVC services...");

            var builder = services.AddMvc(options => options.EnableEndpointRouting = false) //area bug-fix for .net core 2.2. kill me in next release
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            builder.AddMvcOptions(x =>
            {
                //x.Filters.Add<AntiforgeryFilter>();
                x.Filters.Add(new GlobalExceptionHandler());
                x.Filters.Add(new AuthorizeFilter());
                x.ModelBinderProviders.Insert(0, new BinderProvider());
            });

            builder.AddControllersAsServices();
        }
    }
}