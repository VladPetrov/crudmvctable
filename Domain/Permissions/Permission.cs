using System;

namespace Domain.Permissions
{
    [Flags]
    public enum Permission : byte
    {
        None = 0,

        Read = 1,
        Write = 2,
        Create = 4,
        Remove = 8,

        Execute = 16,

        ReadWrite = Read | Write,

        Full = Read | Write | Create | Remove
    }
}