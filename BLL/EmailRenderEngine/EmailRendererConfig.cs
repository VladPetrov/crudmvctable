using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Common.Extensions;

namespace BLL.EmailRenderEngine
{
    interface IEmailRendererConfig
    {
        bool IsForContext(Type type);
    }
    

    internal class EmailRendererConfig<TContext> : IEmailRendererConfig
    {
        private readonly IDictionary<string, Func<TContext, string>> _tagMaps = new Dictionary<string, Func<TContext, string>>();

        public bool IsForContext(Type type) => type == typeof(TContext);

        public IEnumerable<string> GetTags() => _tagMaps.Keys;

        public void AddMap(string tag, Func<TContext, string> func)
        {
            _tagMaps.Add(new KeyValuePair<string, Func<TContext, string>>(tag, func));
        }

        public string GetTagValue(string tag, TContext context)
        {
            if (!_tagMaps.ContainsKey(tag))
            {
                return string.Empty;
            }

            var func = _tagMaps[tag];

            try
            {
                return func(context);
            }
            catch (Exception e)
            {
                //todo log
                return "";
            }
        }
    }
}