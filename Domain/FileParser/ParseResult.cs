using System.Collections.Generic;

namespace Domain.FileParser
{
    public class ParseResult<T> where T : class
    {
        public readonly List<T> Records = new List<T>();

        public readonly List<string> Errors = new List<string>();

        public bool Success => Errors.Count == 0;
    }
}
