using System.IO;
using System.Runtime.CompilerServices;
using Serilog;

namespace Common
{
    /// <summary>
    /// Serilog wrapper which provides line number, class namesand method name
    /// without WithContext() calls.
    /// </summary>
    public static class Log
    {
        public static ILogger Instance { get; set; }

        public static bool IsConfigured => Instance != null;

        public static ILogger Logger(
            [CallerMemberName] string memberName = "",
            [CallerFilePath] string sourceFilePath = "",
            [CallerLineNumber] int sourceLineNumber = 0)
        {
            return Instance.ForContext("File", Path.GetFileName(sourceFilePath)).ForContext("Member", memberName).ForContext("Line", sourceLineNumber);
        }
    }
}