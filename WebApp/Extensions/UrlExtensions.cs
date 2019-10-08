using Microsoft.AspNetCore.Mvc;
using WebApp.Controllers;

namespace WebApp.Extensions
{
    public static class UrlExtensions
    {
        public static string EmailConfirmationLink(this IUrlHelper urlHelper, string userId, string code, string scheme)
        {
            return urlHelper.Action(
                action: nameof(AccountController.ConfirmEmail),
                controller: nameof(AccountController).ToControllerName(),
                values: new { userId, code },
                protocol: scheme);
        }

        public static string ResetPasswordCallbackLink(this IUrlHelper urlHelper, string userId, string code, string scheme)
        {
            return urlHelper.Action(
                action: nameof(AccountController.ResetPassword),
                controller: nameof(AccountController).ToControllerName(),
                values: new { userId, code },
                protocol: scheme);
        }
    }
}
