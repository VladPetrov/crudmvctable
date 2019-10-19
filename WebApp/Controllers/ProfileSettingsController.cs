﻿using Domain.ProfileSettings;
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

            return View(Service.GetNotificationSettings(userId));
        }

        [HttpPost]
        public IActionResult NotificationsSettings(List<NotificationsDomain> settings)
        {
            return GetView(Service.UpsertNotificationSettings(settings));
        }

        [HttpGet]
        public IActionResult DeliveryAddressSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return View(Service.GetDeliveryAddress(userId));
        }

        [HttpPost]
        public IActionResult DeliveryAddressSettings(DeliveryAddressDomain model)
        {
            return GetView(Service.UpsertDeliveryAddress(model));
        }

        [HttpGet]
        public IActionResult AuthorizedPersonSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return View(Service.GetAuthorizedPersonSettings(userId));
        }

        [HttpPost]
        [AutoValidateAntiforgeryToken]
        public IActionResult AuthorizedPersonSettings(AuthorizedPersonDomain model)
        {
            return GetView(Service.UpsertAuthorizedPersonSettings(model));
        }

        [HttpGet]
        public IActionResult LoginSettings(string userId, bool isReadonly)
        {
            SetReadonlyModeForView(isReadonly);

            return View(Service.GetLoginSettings(userId));
        }

        [HttpPost]
        public IActionResult LoginSettings(LoginSettingsDomain model)
        {
            return GetView(Service.UpsertLoginSettings(model));
        }

        private void SetReadonlyModeForView(bool isReadonly)
        {

        }
    }
}