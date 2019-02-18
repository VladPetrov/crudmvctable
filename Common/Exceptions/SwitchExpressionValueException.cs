using System;

namespace Common.Exceptions
{
    public class SwitchExpressionValueException : Exception
    {
        public SwitchExpressionValueException(object value) : base($"Unsupported switch expression value: '{value}'")
        {
        }
    }
}