using System.Reflection;

namespace Common.Configuration
{
    public class ApplicationVersion
    {
        public static readonly int BuildNumber;

        public static readonly string Revision;
        
        static ApplicationVersion()
        {
            Revision = typeof(ApplicationVersion).GetTypeInfo().Assembly.GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;

            BuildNumber = typeof(ApplicationVersion).GetTypeInfo().Assembly.GetName().Version.Revision;
        }
    }
}