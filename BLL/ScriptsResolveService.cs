using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Common;
using Common.Configuration;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Hosting;

namespace BLL
{
    [UsedImplicitly]
    public class ScriptsResolveService
    {
        public static string ScriptsFolderPath => "wwwroot/js/scripts";

        private IHostingEnvironment Env { get; } //todo use configprovider
        private IAppConfigurationProvider Configuration { get; } 

        public ScriptsResolveService(IHostingEnvironment env, IAppConfigurationProvider configuration)
        {
            Env = env;
            Configuration = configuration;
        }

        public string GetScript(string fileName)
        {
            var files = GetFiles();
            
            var jsFile = files.SingleOrDefault(x => x.StartsWith(fileName, StringComparison.InvariantCultureIgnoreCase));

            if (jsFile == null)
            {
                var message = $"'{fileName}' script chunks were not found";

                Log.Logger().Error(message);

                ThrowOnProduction(message);
            }
            
            return  $"{GetBasePath()}/{jsFile}";
        }

        public IReadOnlyCollection<string> GetChunks()
        {
            var results = new List<string>();

            var files = GetFiles();

            results.AddRange(files.Where(x => x.StartsWith("vendors~", StringComparison.InvariantCultureIgnoreCase)));

            return ConvertToViewPath(results);
        }

        private List<string> GetFiles()
        {
            var fullPath = Path.Combine(Configuration.ContentRootPath, ScriptsFolderPath);

            if (!Directory.Exists(fullPath))
            {
                var message = $"Scripts folder '{ScriptsFolderPath}' was not found";

                Log.Logger().Error(message);

                ThrowOnProduction(message);

                return new List<string>();
            }

            return Directory.GetFiles(fullPath).Select(Path.GetFileName).ToList();
        }

        private void ThrowOnProduction(string message)
        {
            if (!Env.IsDevelopment())
            {
                throw new Exception(message);
            }
        }

        private List<string> ConvertToViewPath(List<string> files)
        {
            var basePath = GetBasePath();

            return files.Select(x => $"{basePath}/{x}").ToList();
        }

        private string GetBasePath()
        {
            return ScriptsFolderPath.Replace("wwwroot", "");
        }
    }
}
