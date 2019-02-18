using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using Domain;
using Domain.Permissions;
using JetBrains.Annotations;
using Newtonsoft.Json;

namespace Security
{
    public class IdentityUser 
    {
      public const string ClaimName = ClaimTypes.Name;

      public const string ClaimNameIdentifier = ClaimTypes.NameIdentifier;

      public const string ClaimEmail = ClaimTypes.Email;

      public const string ClaimRole = ClaimTypes.Role;

      public const string ClaimType = "ClaimType";

      public const string ClaimLogin = "ClaimLogin";

      public const string ClaimIsAdministrative = "ClaimIsAdministrative";

      public const string ClaimCanEdit = "ClaimCanEdit";

      public const string ClaimPermissions = "ClaimPermissions";

      public const string ClaimForceToResetPassword = "ClaimForceToResetPassword";

      [NotNull]
      public IEnumerable<Claim> Claims { get; }

      public bool Authenticated { get; }

      public bool ForceToResetPassword { get; }

      public bool IsAdministrative { get; }

      public bool CanEdit { get; }

      [CanBeNull]
      public string Login { get; }

      [CanBeNull]
      public string Email { get; }
    
      public UserType Type { get; }

      [CanBeNull]
      public string UserFullName { get; }

      public long? UserId { get; }

      [NotNull]
      public IEnumerable<string> Roles { get; }

      private Dictionary<PermissionObject, Permission> PermissionsMap { get; }

      private IdentityUser(IEnumerable<Claim> claims)
      {
        Authenticated = claims != null;
        Claims = claims ?? new List<Claim>();

        var id = GetClaimValue(ClaimNameIdentifier, 0L);
        UserId = id != 0 ? id : default(long?);

        UserFullName = GetClaimValue<string>(ClaimName);
        Login = GetClaimValue<string>(ClaimLogin);
        Email = GetClaimValue<string>(ClaimEmail);
        
        var userTypeName = GetClaimValue<string>(ClaimType);
        Type = userTypeName == null || !userTypeName.Any()  ? UserType.None : (UserType)Enum.Parse(typeof(UserType), userTypeName);

        ForceToResetPassword = GetClaimValue(ClaimForceToResetPassword, false);
        IsAdministrative = GetClaimValue(ClaimIsAdministrative, false);
        CanEdit = GetClaimValue(ClaimCanEdit, false);
        Roles = GetClaimValues<string>(ClaimRole);

        var claimValue = GetClaimValue<string>(ClaimPermissions);
        if (!string.IsNullOrEmpty(claimValue))
        {
          PermissionsMap = JsonConvert.DeserializeObject<Dictionary<PermissionObject, Permission>>(claimValue);
        }
        else
        {
          PermissionsMap = new Dictionary<PermissionObject, Permission>();
        }
      }

      public IdentityUser(IIdentity identity):this((identity as ClaimsIdentity)?.Claims.ToList())
      {
      }

      public IdentityUser(IPrincipal identity):this((identity as ClaimsPrincipal)?.Claims.ToList())
      {
      }

      public T GetClaimValue<T>(string type, T defaultValue = default(T))
      {
        var claim = Claims.FirstOrDefault(c => c.Type == type);

        return claim != null ? (T)Convert.ChangeType(claim.Value, typeof(T)) : default(T);
      }

      public IEnumerable<T> GetClaimValues<T>(string type)
      {
        var claims = Claims.Where(c => c.Type == type && !string.IsNullOrEmpty(c.Value));

        return claims.Select(c => (T)Convert.ChangeType(c.Value, typeof(T))).ToList();
      }

      public bool HasPermission(PermissionObject obj, Permission permissions)
      {
        if (!Claims.Any() || !Authenticated)
        {
          return false;
        }

        var result = false;

        if (obj == PermissionObject.Default)
        {
          result = true;
        }
        else
        {
          if (permissions == Permission.Read && IsAdministrative)
          {
            result = true;
          }
          else if (IsAdministrative && CanEdit)
          {
            result = true;
          }
          else
          {
            if (PermissionsMap.ContainsKey(obj) && (PermissionsMap[obj] & permissions) == permissions)
            {
              result = true;
            }
          }
        }
        return result;
      }
    }
}

