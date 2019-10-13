using System;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using Common;
using Common.StringConstants;
using DAL.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApp.Extensions;
using WebApp.Model.UsersPanel;

namespace WebApp.Areas.BackOffice.Controllers
{

    [Authorize(Roles = RoleNames.Admin)]
    public class UsersPanelController : BackOfficeController
    {
        private AppsUserManager UserManager { get; }

        private IEmailSenderService EmailSender { get; }

        [TempData]
        public string StatusMessage { get; set; }

        public UsersPanelController(AppsUserManager userManager, IEmailSenderService emailSender)
        {
            UserManager = userManager;
            EmailSender = emailSender;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var users = UserManager.Users.ToList();

            ViewBag.StatusMessage = StatusMessage;

            return View(users);
        }
        
        [HttpGet]
        public async Task<IActionResult> ChangePassword(string id)
        {
            var user = await UserManager.FindByIdAsync(id);
            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{id}'.");
            }
            
            var model = new ChangePasswordModel {Id = id, StatusMessage = StatusMessage };
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ChangePassword(ChangePasswordModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = await UserManager.FindByIdAsync(model.Id);
            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{model.Id}'.");
            }

            var valid = await UserManager.ValidatePassword(user, model.NewPassword);
            if (!valid.Succeeded)
            {
                AddErrors(valid);
                return View(model);
            }

            var removeResult = await UserManager.RemovePasswordAsync(user);
            if (!removeResult.Succeeded)
            {
                AddErrors(removeResult);
                return View(model);
            }
            
            var changePasswordResult = await UserManager.AddPasswordAsync(user, model.NewPassword);
            if (!changePasswordResult.Succeeded)
            {
                AddErrors(changePasswordResult);
                return View(model);
            }

            StatusMessage = $"Users '{user.UserName}' password has been changed.";

            return RedirectToAction(nameof(Index));
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email };

                var result = await UserManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    Log.Logger().Information("User created a new account with password.");

                    var code = await UserManager.GenerateEmailConfirmationTokenAsync(user);

                    var callbackUrl = Url.EmailConfirmationLink(user.Id.ToString(), code, Request.Scheme);

                    await EmailSender.SendEmailConfirmationAsync(model.Email, callbackUrl);
                    
                    Log.Logger().Information("User created a new account with password.");

                    return RedirectToAction(nameof(Index));
                }

                AddErrors(result);
            }
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Delete(string id)
        {
            throw new NotImplementedException();
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }
    }
}