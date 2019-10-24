using System;
using System.IO;
using System.Linq;
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

        [Pure]
        [NotNull]
        public static string ToFileName([NotNull] this string value)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                throw new ArgumentException(nameof(value));
            }

            var fileName = Path.GetInvalidFileNameChars().Aggregate(value.Trim(), (result, symbol) => result.Replace(symbol.ToString(), ""));

            if (string.IsNullOrWhiteSpace(fileName))
            {
                throw new Exception($"File name can not be empty: '{value}'");
            }

            return fileName;
        }
    }
}