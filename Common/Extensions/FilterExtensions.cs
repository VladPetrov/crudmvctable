using System;
using System.Text.RegularExpressions;

namespace Common.Exceptions
{
    public static class FilterExtensions
    {
        public static string ToValidNumberInStr(this string str)
        {
            return Regex.Replace(str, @"[^\d^-]", String.Empty);
        }
    }
}
