using System.Collections.Generic;

namespace Common.Table
{
    public class ListResult<T>     
    {
        public ListResult(List<T> data, int filtered, int total)
        {
            Data = data ?? new List<T>();
            Filtered = filtered;
            Total = total;
        }

        public List<T> Data { get; }

        public int Filtered { get; }

        public int Total { get; }
    }
}