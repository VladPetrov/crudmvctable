using System;
using System.Text.RegularExpressions;
using JetBrains.Annotations;

namespace Common.Extensions
{
    public static class StringExtensions
    {
        [Pure]
        [CanBeNull]
        [ContractAnnotation("null=>null")]
        public static string ToPascalCase([CanBeNull] this string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return value;
            }

            return value[0].ToString().ToUpper() + value.Substring(1);
        }

        public static TEnum ParseToEnum<TEnum>(this string value) where TEnum : struct 
        {
            return (TEnum)ParseToEnum(value, typeof(TEnum));
        }

        public static object ParseToEnum(this string value, Type type)
        {
            if (!type.IsEnum)
            {
                throw new ArgumentException(nameof(type));
            }

            value = Regex.Replace(value, "[!@#$%^&*()_+;:'\"`~.-]", string.Empty);

            value = value.Replace(" ", string.Empty);
            
            if (!Enum.TryParse(type, value, true, out var result))
            {
                throw new ArgumentException($"Enumeration '{value}' was not found in the enum '{type.FullName}'");
            }

            return result;
        }

        public static string NormalizeIban(this string iban)
        {
            Defensive.AssertNotNull(iban, "Iban can not be null");

            if (iban.Length > 10)
            {
                iban = iban.Substring(Math.Max(0, iban.Length - 10)); //get last 10 characters
            }

            return iban;
        }
    }
}