using Optional;
using System;

namespace Common.Extensions
{
    public static class OptionalExtensions
    {
        public static Option<TValue> AsOptional<TValue>(this TValue value) where TValue : class
        {
            return value == null ? Option.None<TValue>() : Option.Some(value);
        }
        
        public static Option<TValue> CreateIfNone<TValue>(this Option<TValue> option) where TValue : class, new()
        {
            if (!option.HasValue)
            {
                return new TValue().Some();
            }
            return option;
        }
        
        public static Option<TValue> Do<TValue>(this Option<TValue> option, Action action)
        {
            return option.Map(value =>
            {
                action.Invoke();
                return value;
            });
        }

        public static Option<TValue> Do<TValue>(this Option<TValue> option, Action<TValue> action)
        {
            return option.Map(value =>
            {
                action.Invoke(value);
                return value;
            });
        }

        public static Option<TValue> Do<TValue, TResult>(this Option<TValue> option, Func<TValue, TResult> action)
        {
            return option.Map(value =>
            {
                action.Invoke(value);
                return value;
            });
        }

        public static Option<TValue> Do<TValue, TResult>(this Option<TValue> option, Func<TResult> action)
        {
            return option.Map(value =>
            {
                action.Invoke();
                return value;
            });
        }
    }
}