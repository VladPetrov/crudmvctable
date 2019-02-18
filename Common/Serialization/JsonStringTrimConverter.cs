using System;
using Newtonsoft.Json;

namespace Common.Serialization
{
  public class JsonStringTrimConverter : JsonConverter
  {
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
      if (value is string)
      {
        writer.WriteValue(value);
      }
      else
      {
        throw new JsonSerializationException($"Unexpected value when converting string. Expected String, got {value}.");
      }
    }

    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
      if (reader.TokenType == JsonToken.Null)
      {
        return null;
      }

      if (reader.TokenType == JsonToken.String)
      {
        return ((string)reader.Value).Trim();
      }

      throw new JsonSerializationException($"Unexpected token parsing string. Expected String, got {reader.TokenType}.");
    }

    public override bool CanConvert(Type objectType)
    {
      return objectType == typeof(string);
    }
  }
}
