using JetBrains.Annotations;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Newtonsoft.Json;

namespace WebApp.Model
{
    public static class TempDataExtensions
    {
        public static void Set<T>(this ITempDataDictionary tempData, [NotNull] string key, T value)
        {
            tempData[key] = JsonConvert.SerializeObject(value);
        }

        public static T Get<T>(this ITempDataDictionary tempData, [NotNull] string key, T defaultVal = default(T)) 
        {
            tempData.TryGetValue(key, out var val);

            tempData[key] = null;

            return val != null ? JsonConvert.DeserializeObject<T>((string)val) : defaultVal;
        }
    }
}
