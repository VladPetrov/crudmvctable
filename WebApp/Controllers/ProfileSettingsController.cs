using BLL.Infrastructure;
using DAL.Repositories;
using Domain.ProfileSettings;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using WebApp.Extensions;
using IdentityResult = Microsoft.AspNetCore.Identity.IdentityResult;


namespace WebApp.Controllers
{
    [AutoValidateAntiforgeryToken]
    [Route("[controller]/[action]/{userId}/{isReadonly}")]
    public class ProfileSettingsController : MvcController
    {
        private IProfileSettingsService Service { get; }
        private AppsUserManager UserManager { get; }

        public ProfileSettingsController(IProfileSettingsService service, AppsUserManager userManager)
        {
            Service = service;
            UserManager = userManager;
        }

        [HttpGet]
        public IActionResult NotificationsSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return PartialView(Service.GetNotificationSettings(userId));
        }

        [HttpPost]
        public IActionResult NotificationsSettings(NotificationsViewModel model)
        {
            SetReadonlyModeForView(false);

            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            var result = Service.UpsertNotificationSettings(model);

            if (result.Success)
            {
                SendSuccessStatusMessage();
            }

            return GetPartialView(result);
        }

        [HttpGet]
        public IActionResult DeliveryAddressSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return PartialView(Service.GetDeliveryAddress(userId));
        }

        [HttpPost]
        public IActionResult DeliveryAddressSettings(DeliveryAddressDomain model)
        {
            SetReadonlyModeForView(false);

            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            var result = Service.UpsertDeliveryAddress(model);

            if (result.Success)
            {
                SendSuccessStatusMessage();
            }
            
            return GetPartialView(result);
        }

        [HttpGet]
        public IActionResult AuthorizedPersonsSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return PartialView(Service.GetAuthorizedPersonsSettings(userId));
        }

        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public IActionResult AuthorizedPersonsSettings(AuthorizedPersonDomain model)
        {
            SetReadonlyModeForView(false);

            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            var result = Service.UpsertAuthorizedPersonsSettings(model);

            if (result.Success)
            {
                SendSuccessStatusMessage();
            }

            return GetPartialView(result);
        }

        [HttpGet]
        public async Task<IActionResult> LoginSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            if (!HasRightsToChangePass(userId))
            {
                return Forbid();
            }
            
            var email = (await UserManager.FindByIdAsync(userId)).Email;

            return PartialView(new LoginSettingsDomain{ Id = userId, Email = email });
        }

        [HttpPost]
        public async Task<IActionResult> LoginSettings(LoginSettingsDomain model)
        {
            SetReadonlyModeForView(false);
            
            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }
            
            var user = await UserManager.FindByIdAsync(model.Id);
            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{model.Id}'.");
            }

            if (!HasRightsToChangePass(user.Id))
            {
                return Forbid();
            }

            var valid = await UserManager.ValidatePassword(user, model.Password);
            if (!valid.Succeeded)
            {
                AddErrors(valid);
                return PartialView(model);
            }

            var removeResult = await UserManager.RemovePasswordAsync(user);
            if (!removeResult.Succeeded)
            {
                AddErrors(removeResult);
                return PartialView(model);
            }

            var changePasswordResult = await UserManager.AddPasswordAsync(user, model.Password);
            if (!changePasswordResult.Succeeded)
            {
                AddErrors(changePasswordResult);
                return PartialView(model);
            }

            SendSuccessStatusMessage();

            return PartialView(new LoginSettingsDomain{Email = model.Email});
        }

        public static string Mode => "readonlyMode"; 

        private void SetReadonlyModeForView(bool isReadonly)
        {
            ViewData[Mode] = isReadonly;
        }

        private bool HasRightsToChangePass(string userId)
        {
            return userId == IdentityExtensions.GetUserId(User.Identity);
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        private void SendSuccessStatusMessage()
        {
            ViewData.SetStatusMessage("Profile settings were updated");
        }
    }
}
