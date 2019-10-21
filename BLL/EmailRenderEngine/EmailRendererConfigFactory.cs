using System.Collections.Generic;
using System.Linq;

namespace BLL.EmailRenderEngine
{
    internal class EmailRendererConfigFactory
    {
        public static List<IEmailRendererConfig> Configs = new List<IEmailRendererConfig>(); //todo add config population

        static EmailRendererConfigFactory()
        {
            Config.RegisterConfigs(Configs);
        }

        public static EmailRendererConfig<T> GetConfigForContext<T>() where T : class
        {
            return (EmailRendererConfig<T>) Configs.Single(x => x.IsForContext(typeof(T)));
        }
    }
}
