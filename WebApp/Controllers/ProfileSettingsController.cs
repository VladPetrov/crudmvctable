using Domain.ProfileSettings;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BLL.Infrastructure;

namespace WebApp.Controllers
{
    [AutoValidateAntiforgeryToken]
    public class ProfileSettingsController : MvcController
    {
        private IProfileSettingsService Service { get; }

        public ProfileSettingsController(IProfileSettingsService service)
        {
            Service = service;
        }
        
        public IActionResult NotificationsSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return PartialView(Service.GetNotificationSettings(userId));
        }

        [HttpPost]
        public IActionResult NotificationsSettings(List<NotificationsDomain> settings)
        {
            SetReadonlyModeForView(false);

            if (!ModelState.IsValid)
            {
                return PartialView(settings);
            }

            return GetPartialView(Service.UpsertNotificationSettings(settings));
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
            
            return GetPartialView(null, Service.UpsertDeliveryAddress(model));
        }

        [HttpGet]
        public IActionResult AuthorizedPersonSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return PartialView(Service.GetAuthorizedPersonSettings(userId));
        }

        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public IActionResult AuthorizedPersonSettings(AuthorizedPersonDomain model)
        {
            SetReadonlyModeForView(false);

            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            return GetPartialView(null, Service.UpsertAuthorizedPersonSettings(model));
        }

        [HttpGet]
        public IActionResult LoginSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return PartialView(Service.GetLoginSettings(userId));
        }

        [HttpPost]
        public IActionResult LoginSettings(LoginSettingsDomain model)
        {
            SetReadonlyModeForView(false);

            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            return GetPartialView(Service.UpsertLoginSettings(model));
        }

        public static string Mode => "readonlyMode"; 

        private void SetReadonlyModeForView(bool isReadonly)
        {
            ViewData[Mode] = isReadonly;
        }
    }
}
