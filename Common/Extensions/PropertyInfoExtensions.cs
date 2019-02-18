using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using JetBrains.Annotations;

namespace Common.Extensions
{
    public static class PropertyInfoExtensions
    {
        private static readonly Regex PropertyPattern = new Regex("([A-Z\\d]+[a-z]*)(?=[A-Z\\d])", RegexOptions.Compiled);

        [NotNull]
        public static string GetDisplayName(this PropertyInfo propertyInfo)
        {
            var display = propertyInfo.GetDisplayNameAttributeValue();

            if (display != null)
            {
                return display;
            }

            return propertyInfo.Name.ToDisplayName();
        }

        [NotNull]
        public static string GetDisplayName(this MemberInfo memberInfo)
        {
            var display = memberInfo.GetDisplayNameAttributeValue();

            if (display != null)
            {
                return display;
            }

            return memberInfo.Name.ToDisplayName();
        }

        [CanBeNull]
        private static string GetDisplayNameAttributeValue(this PropertyInfo propertyInfo)
        {
            if (propertyInfo != null)
            {
                var display = propertyInfo.GetCustomAttribute<DisplayAttribute>();
                if (display != null)
                {
                    if (string.IsNullOrEmpty(display.Name))
                    {
                        throw new Exception("DisplayAttribute name property is required");
                    }
                    //Use Display attribute as property name
                    return display.Name;
                }
            }
            return null;
        }

        [CanBeNull]
        private static string GetDisplayNameAttributeValue(this MemberInfo memberInfo)
        {
            if (memberInfo != null)
            {
                var display = memberInfo.GetCustomAttribute<DisplayAttribute>();
                if (display != null)
                {
                    if (string.IsNullOrEmpty(display.Name))
                    {
                        throw new Exception("DisplayAttribute name property is required");
                    }
                    //Use Display attribute as property name
                    return display.Name;
                }
            }
            return null;
        }

        /// <summary>
        /// "PhoneExtension" => "Phone Extension"
        /// </summary>
        /// <param name="propertyName"></param>
        /// <param name="prefixes"></param>
        /// <returns></returns>
        [NotNull]
        public static string ToDisplayName([NotNull] this string propertyName, params string[] prefixes)
        {
            foreach (var prefix in prefixes)
            {
                if (propertyName.StartsWith(prefix))
                {
                    var words = PropertyPattern.Split(propertyName.Replace(prefix, "")).Where(s => !string.IsNullOrWhiteSpace(s));
                    return prefix + string.Join(" ", words);
                }
            }

            //first item can be empty string 
            return string.Join(" ", PropertyPattern.Split(propertyName).Where(s => !string.IsNullOrWhiteSpace(s)));
        }
    }
}