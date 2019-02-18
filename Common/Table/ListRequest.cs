using System.Collections.Generic;

namespace Common.Table
{
    public class ListRequest
    {
        public ListRequest(List<Filter> filters, List<SortOrder> sorts, int skip, int take, bool skipPaging = false)
        {
            Skip = skip;
            Take = take;
            SkipPaging = skipPaging;

            Sorts = sorts ?? new List<SortOrder>();
            Filters = filters ?? new List<Filter>();
        }

        public int Skip { get; }

        public int Take { get; }

        public bool SkipPaging { get; }

        public List<SortOrder> Sorts { get;  }

        public List<Filter> Filters { get; }
    }
}