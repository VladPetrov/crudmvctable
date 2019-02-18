using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace Common.Configuration
{
    internal static class ConfigurationExtesions
    {
        public static string GetString(this IConfiguration AppSettings, string name, bool isRequired = false, string defaultValue = null)
        {
            var isEmpty = string.IsNullOrEmpty(AppSettings[name]);

            if (isRequired && isEmpty && string.IsNullOrEmpty(defaultValue))
            {
                throw new Exception($"Required string option is missing: ${name}");
            }

            return isEmpty ? defaultValue : AppSettings[name];
        }

        public static bool GetBoolean(this IConfiguration AppSettings, string name, bool isRequired = false, bool defaultValue = false)
        {
            var isEmpty = string.IsNullOrEmpty(AppSettings[name]);

            if (isRequired && isEmpty)
            {
                throw new Exception($"Required boolean option is missing: ${name}");
            }

            return isEmpty ? defaultValue : AppSettings[name].ToLower() == "true";
        }

        public static int GetInt(this IConfiguration appSettings, string name, bool isRequired = false, int defaultValue = 0)
        {
            var isEmpty = string.IsNullOrEmpty(appSettings[name]);

            if (isRequired && isEmpty)
            {
                throw new Exception($"Required int option is missing: ${name}");
            }

            int value;
            if (!int.TryParse(appSettings[name], out value))
            {
                throw new ArgumentException($"Value of parameter {name} is incorrect");
            }

            return isEmpty ? defaultValue : value;
        }
        public static List<SeedType> GetSeedType(this IConfiguration AppSettings)
        {
            var typeString = AppSettings["SeedType"];

            if (string.IsNullOrWhiteSpace(typeString))
            {
                return new List<SeedType> {SeedType.None};
            }

            var settings = typeString.Split(new[] {",", " "}, StringSplitOptions.RemoveEmptyEntries).ToList();

            var type = new List<SeedType>();

            settings.ForEach(x =>
            {
                if (Enum.TryParse<SeedType>(typeString, true, out var t))
                {
                    type.Add(t);
                }
            });

            _ = type.Count == 0
                ? throw new ArgumentException($"Value of parameter SeedType is incorrect: {typeString}") 
                : "";

            return type;
        }
    }
}
