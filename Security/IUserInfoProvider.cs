using System.Collections.Generic;
using Domain;
using Domain.Permissions;
using JetBrains.Annotations;

namespace CreditorGuard.Security
{
    public interface IUserInfoProvider
    {
        [NotNull]
        string Login { get; }

        [CanBeNull]
        string Email { get; }

        UserType Type { get; }

        [NotNull]
        string FullName { get; }

        long UserId { get; }

        bool Authenticated { get; }

        bool IsAdministrative { get; }

        bool CanEdit { get; }

        [NotNull]
        IEnumerable<string> Roles { get; }

        bool HasPermission(PermissionObject permissionObject, Permission permissions);

        bool CanRead(params PermissionObject[] permissionObject);

        bool CanWrite(params PermissionObject[] permissionObject);

        bool CanDelete(params PermissionObject[] permissionObject);

        bool CanCreate(params PermissionObject[] permissionObject);

        bool CanExecute(params PermissionObject[] permissionObject);
    }
}