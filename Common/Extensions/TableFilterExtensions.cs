using System;
using System.Collections.Generic;
using System.Linq;
using Common.Table;
using JetBrains.Annotations;

namespace Common.Extensions
{
    public static class TableFilterExtensions
    {
        private static string DateRangeFilterStartDateName => "startFilter";
        private static string DateRangeFilterEndDateName => "endFilter";
        private static string GetRangeFilterStartDateGroupName(string fieldId) => $"{fieldId}_{DateRangeFilterStartDateName}";
        private static string GetRangeFilterEndDateGroupName(string fieldId) => $"{fieldId}_{DateRangeFilterEndDateName}";

        [CanBeNull]
        public static Filter FindStartDateFilter(this IEnumerable<Filter> filters, string fieldId)
        {
            return filters.SingleFilterOrDefault(fieldId, GetRangeFilterStartDateGroupName(fieldId));
        }

        [CanBeNull]
        public static Filter FindEndDateFilter(this IEnumerable<Filter> filters, string fieldId)
        {
            return filters.SingleFilterOrDefault(fieldId, GetRangeFilterEndDateGroupName(fieldId));
        }

        [CanBeNull]
        public static Filter SingleFilterOrDefault(this IEnumerable<Filter> filters, string fieldId, string groupName = null)
        {
            return filters.SingleOrDefault(x =>
                string.Equals(x.FieldId, fieldId, StringComparison.InvariantCultureIgnoreCase)
                && (groupName == null || string.Equals(x.Group, groupName, StringComparison.InvariantCultureIgnoreCase)));
        }
    }
}
