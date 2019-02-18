using System;
using System.Globalization;
using Common.Exceptions;
using JetBrains.Annotations;

namespace Common
{
    /// <summary>
    /// Correct ways to work with dates,
    /// see this video https://www.youtube.com/watch?v=14l2JagZSlo
    /// </summary>
    public static class DateTimeContext
    {
        private static TimeZoneInfo TimeZone { get; set; } = TimeZoneInfo.Local; // todo!!

        public static DateTime Today => GetCurrentDate();

        public static DateTime Now => GetCurrentDateTime();

        public static string DateFormat => "dd/MM/yyyy"; //todo form settings

        public static void Initialize(TimeZoneInfo timeZoneInfo)
        {
            TimeZone = timeZoneInfo;
        }

        [Pure]
        public static DateTime GetCurrentDateTime()
        {
            var date = TimeZoneInfo.ConvertTime(DateTime.UtcNow, TimeZone);

            return date;
        }

        [Pure]
        public static DateTime GetCurrentDate()
        {
            var date = GetCurrentDateTime();

            date = date.Date;

            return date;
        }

        /// <summary>
        /// Correct method to add days to business dates (i.e. payment date): 
        /// local => utc => add days => local
        /// </summary>
        /// <param name="date"></param>
        /// <param name="days"></param>
        /// <returns></returns>
        [Pure]
        public static DateTime TimeZoneAddDays(this DateTime date, int days)
        {
            DateTime result;

            switch (date.Kind)
            {
                case DateTimeKind.Unspecified:
                case DateTimeKind.Local:
                    //business date from DB for example

                    //unspecified treated as local when converting to UTC
                    var utc = date.ToUniversalTime();

                    //safe add days
                    var next = utc.AddDays(days);

                    //convert UTC to business time zone
                    result = TimeZoneInfo.ConvertTime(next, TimeZone);
                    break;
                case DateTimeKind.Utc:
                    result = date.AddDays(days);
                    break;
                default:
                    throw new SwitchExpressionValueException(date.Kind);
            }

            return result;
        }

        public static DateTime Parse(string val)
        {
            if (DateTime.TryParseExact(val, DateFormat, CultureInfo.InvariantCulture, DateTimeStyles.None, out var dateValue))
            {
                return dateValue;
            }

            throw new ArgumentException($"Found unknown DateTime format: '{val}'");
        }
    }
}