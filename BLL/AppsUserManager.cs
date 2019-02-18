using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DAL.Model;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace BLL
{
    [UsedImplicitly]
    public class AppsUserManager : UserManager<ApplicationUser>
    {
        public AppsUserManager(IUserStore<ApplicationUser> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<ApplicationUser> passwordHasher, IEnumerable<IUserValidator<ApplicationUser>> userValidators, IEnumerable<IPasswordValidator<ApplicationUser>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<ApplicationUser>> logger) 
            : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
        {
        }
        
        public Task<IdentityResult> ValidatePassword(ApplicationUser user, string newPassword)
        {
            return ValidatePasswordAsync(user, newPassword);
        }
    }
}
