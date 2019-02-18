using System.IO;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Newtonsoft.Json;

namespace Common.Extensions
{
    public static class HttpRequestExtensions
    {
        public static T ReadJson<T>(this HttpRequest request, bool enableRewind = false, Encoding encoding = null)
        {
            if (enableRewind)
            {
                request.EnableRewind();
            }

            if (encoding == null)
            {
                encoding = Encoding.UTF8;
            }

            string raw;

            using (var reader = new StreamReader(request.Body, encoding))
            {
                raw = reader.ReadToEnd();
            }

            return JsonConvert.DeserializeObject<T>(raw);
        }
    }
}
