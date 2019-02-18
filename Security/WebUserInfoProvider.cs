using System.Collections.Generic;
using System.Linq;
using CreditorGuard.Security;
using Domain;
using Domain.Permissions;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Http;
using Common;

namespace Security
{
    [UsedImplicitly]
    public class WebUserInfoProvider : AbstractUserInfoProvider, IUserInfoProvider
    {
      public string Login => IdentityUser.Login ?? SystemUserName;

      public string Email => IdentityUser.Email;
    
      public UserType Type => IdentityUser.Type;

      public string FullName => IdentityUser.UserFullName ?? SystemUserName;

      public long UserId => IdentityUser.UserId ?? SystemUserId;

      public bool Authenticated => HttpContext?.User?.Identity.IsAuthenticated == true;

      public bool IsAdministrative => IdentityUser.IsAdministrative || UserId == SystemUserId;

      public bool CanEdit => IdentityUser.CanEdit || UserId == SystemUserId;

      public IEnumerable<string> Roles => IdentityUser.Roles;

      private  HttpContext HttpContext { get; }

      private IdentityUser _identityUser = null;
      private IdentityUser IdentityUser => _identityUser ?? (_identityUser = GetIdentity());

      public WebUserInfoProvider(IHttpContextAccessor accessor)
      {
        HttpContext = accessor.HttpContext;
      }

      public bool HasPermission(PermissionObject permissionObject, Permission permissions)
      {
        return IdentityUser.HasPermission(permissionObject, permissions) || UserId == SystemUserId;
      }

      public bool CanRead(params PermissionObject[] permissionObject)
      {
        return permissionObject.All(p => HasPermission(p, Permission.Read));
      }

      public bool CanWrite(params PermissionObject[] permissionObject)
      {
        return permissionObject.All(p => HasPermission(p, Permission.Write));
      }

      public bool CanDelete(params PermissionObject[] permissionObject)
      {
        return permissionObject.All(p => HasPermission(p, Permission.Remove));
      }

      public bool CanCreate(params PermissionObject[] permissionObject)
      {
        return permissionObject.All(p => HasPermission(p, Permission.Create));
      }

      public bool CanExecute(params PermissionObject[] permissionObject)
      {
        return permissionObject.All(p => HasPermission(p, Permission.Execute));
      }

      [NotNull]
      private IdentityUser GetIdentity()
      {
        var isHttpContext = HttpContext != null;

        if (isHttpContext && HttpContext?.User?.Identity.IsAuthenticated == false)
        {
          //todo: in this case user is system
          Log.Logger().Warning("User information is not available");
        }
        return new IdentityUser(HttpContext?.User?.Identity);
      }
    }
}