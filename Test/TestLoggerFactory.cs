using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;

namespace Test
{
    internal static class TestLoggerFactory
    {
        public static readonly LoggerFactory ConsoleLoggerFactory = new LoggerFactory(new[]
        {
            new ConsoleLoggerProvider((category, level) => true, true)
        });
    }
}
