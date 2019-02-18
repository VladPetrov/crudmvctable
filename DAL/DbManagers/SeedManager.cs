using Common;
using Common.Configuration;
using JetBrains.Annotations;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL.DbManagers
{
    [UsedImplicitly]
    public class SeedManager
    {
        private List<Type> Seeds { get; } = new List<Type>();

        private IServiceProvider Container { get; }
        
        public SeedManager(IServiceProvider ioc)
        {
            Container = ioc;
        }

        public void Seed(IAppConfigurationProvider config)
        {
            var seeds = Container.GetService<IEnumerable<ISeed>>().ToList();
            
            var basic = seeds.Where(x => x.Type == SeedType.Basic)
                .OrderBy(x => x.Sequence)
                .ToList();

            _ = basic.Count == 0 ? throw new Exception("Basic seed data is not found ") : "";

            basic.ForEach(x => x.Seed());

            config.SeedType.ForEach(type =>
            {
                seeds.Where(x => x.Type == type)
                    .OrderBy(x => x.Sequence)
                    .ToList()
                    .ForEach(s =>
                    {
                        try
                        {
                            s.Seed();
                        }
                        catch (Exception e)
                        {
                            Log.Logger().Error(e, "Seed type {type}, Sequence {seq} failed", s.Type, s.Sequence);
                        }
                    });
            });
        }
    }
}
