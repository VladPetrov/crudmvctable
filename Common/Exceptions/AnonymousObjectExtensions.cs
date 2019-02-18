using System.Collections.Generic;
using System.Dynamic;
using System.Linq;

namespace Common.Exceptions
{
    public static class AnonymousObjectExtensions
    {
        public static object Merge(this object item1, object item2)
        {
            if (item1 == null || item2 == null)
            {
                return item1 ?? item2 ?? new object();
            }
            
            var result = new ExpandoObject() as IDictionary<string, object>;

            MergeInternal(result, item1);

            MergeInternal(result, item2);
            
            return result;
        }

        private static void MergeInternal(IDictionary<string, object> target, object source)
        {
            if (source is IDictionary<string, object> expando)
            {
                foreach (var pair in expando)
                {
                    target[pair.Key] = pair.Value;
                }

                return;
            }

            foreach (var propertyInfo in source.GetType().GetProperties().Where(x => x.CanRead))
            {
                target[propertyInfo.Name] = propertyInfo.GetValue(source, null);
            }
        }
    }
}
