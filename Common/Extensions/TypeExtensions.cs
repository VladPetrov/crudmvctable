using System;
using System.ComponentModel.DataAnnotations;
using System.Reflection;
using JetBrains.Annotations;

namespace Common.Extensions
{
    public static class TypeExtensions
    {
        [NotNull]
        public static string GetDomainName(this Type type)
        {
            return type.GetCustomAttribute<DisplayAttribute>()?.Name ?? type.Name.ToDisplayName();
        }
    }
}
