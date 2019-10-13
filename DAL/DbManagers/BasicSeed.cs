using System.Threading.Tasks;
using Common;
using Common.Configuration;
using Common.StringConstants;
using DAL.Model;
using Microsoft.AspNetCore.Identity;

namespace DAL.DbManagers
{
    public class BasicSeed : AbstractSeed
    {
        private UserManager<ApplicationUser> UserManager { get; }
        private RoleManager<IdentityRole> RoleManager { get; }

        public BasicSeed(DataBase context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager) : base(context, SeedType.Basic, 1)
        {
            UserManager = userManager;
            RoleManager = roleManager;
        }

        protected override void DoSeed()
        {
            PopulateRoles().Wait();
            PopulateSystemUser().Wait();
        }
        
        private async Task PopulateSystemUser()
        {
            var user = new ApplicationUser { UserName = Constants.DefaultUser, Email = Constants.DefaultUser};

            var result = await UserManager.CreateAsync(user, Constants.DefaultUserPassword);

            Defensive.AssertTrue(result.Succeeded, string.Join("; ", result.Errors));

            var roleResult = await UserManager.AddToRoleAsync(user, RoleNames.Admin);

            Defensive.AssertTrue(roleResult.Succeeded, string.Join("; ", roleResult.Errors));
        }

        private async Task PopulateRoles()
        {
            var result = await RoleManager.CreateAsync(new IdentityRole(RoleNames.Admin));

            Defensive.AssertTrue(result.Succeeded, string.Join("; ", result.Errors));

            result = await RoleManager.CreateAsync(new IdentityRole(RoleNames.BackOffice));

            Defensive.AssertTrue(result.Succeeded, string.Join("; ", result.Errors));

            result = await RoleManager.CreateAsync(new IdentityRole(RoleNames.Customer));

            Defensive.AssertTrue(result.Succeeded, string.Join("; ", result.Errors));
        }
    }
}