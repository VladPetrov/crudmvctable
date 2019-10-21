using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.EmailRenderEngine
{
    class TestClass
    {
        public string Name { get; set; }  
        public int Balance { get; set; }  
    }

    internal static class Config
    {
        public static void RegisterConfigs(List<IEmailRendererConfig> list)
        {
            var conf = new EmailRendererConfig<TestClass>();
            conf.AddMap("Name", x => x.Name);
            conf.AddMap("MyBalance", x => x.Balance.ToString());

            list.Add(conf);
        }
    }
}
