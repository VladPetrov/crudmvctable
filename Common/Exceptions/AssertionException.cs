using System;
using System.Runtime.Serialization;
using JetBrains.Annotations;

namespace Common.Exceptions
{
    [Serializable]
    public class AssertionException:Exception
    {
        public AssertionException()
        {
        }

        public AssertionException(string message) : base(message)
        {
        }

        public AssertionException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected AssertionException([NotNull] SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}