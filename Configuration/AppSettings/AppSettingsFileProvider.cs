using Microsoft.Extensions.Configuration;

namespace Configuration.AppSettings
{
    public class AppSettingsFileProvider
    {
        public static IConfigurationRoot LoadConfiguration(string path, string environmentName)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(path)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{environmentName}.json", optional: true);
                
            return builder.Build();
        }
    }
}
