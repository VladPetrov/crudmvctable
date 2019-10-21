using System;
using System.Text.RegularExpressions;

namespace Common.Extensions
{
    public static class FilterExtensions
    {
        public static string ToValidNumberInStr(this string str)
        {
            return Regex.Replace(str, @"[^\d^-]", String.Empty);
        }
    }
}
