using Common.Exceptions;
using JetBrains.Annotations;

namespace Common
{
    public static class Defensive
    {
        [AssertionMethod]
        public static void AssertFalse([AssertionCondition(AssertionConditionType.IS_FALSE)] bool value, string message = null)
        {
            if (value)
            {
                ThrowException(message);
            }
        }
        
        [AssertionMethod]
        public static void AssertTrue([AssertionCondition(AssertionConditionType.IS_TRUE)] bool value, string message = null)
        {
            if (value != true)
            {
                ThrowException(message);
            }
        }
        
        [AssertionMethod]
        public static void AssertTrue([AssertionCondition(AssertionConditionType.IS_TRUE)] bool? value, string message = null)
        {
            if (value != true)
            {
                ThrowException(message);
            }
        }
        
        [AssertionMethod]
        public static void AssertNotNull<T>([AssertionCondition(AssertionConditionType.IS_NOT_NULL)] T value, string message = null)
        {
            // ReSharper disable once CompareNonConstrainedGenericWithNull
            if (value == null) //-V3111
            {
                ThrowException(message);
            }
        }
        
        [AssertionMethod]
        public static void AssertNull<T>([AssertionCondition(AssertionConditionType.IS_NULL)] T value, string message = null)
        {
            // ReSharper disable once CompareNonConstrainedGenericWithNull
            if (value != null) //-V3111
            {
                ThrowException(message);
            }
        }
        
        [AssertionMethod]
        public static void AssertNotEmpty([AssertionCondition(AssertionConditionType.IS_NOT_NULL)] string value, string message = null)
        {
            if (string.IsNullOrEmpty(value))
            {
                ThrowException(message);
            }
        }
        
        private static void ThrowException(string message)
        {
            if (string.IsNullOrWhiteSpace(message))
            {
                throw new AssertionException();
            }
            else
            {
                throw new AssertionException(message);
            }
        }
    }
}