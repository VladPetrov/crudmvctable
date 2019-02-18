using System;
using System.Reflection;
using Common.Attributes;
using JetBrains.Annotations;

namespace Common.Extensions
{
    public static class TypeExtensions
    {
        [NotNull]
        public static string GetDomainName(this Type type)
        {
            return type.GetCustomAttribute<DomainNameAttribute>()?.Name ?? type.Name.ToDisplayName();
        }
    }
}
