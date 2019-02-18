using System;
using JetBrains.Annotations;
using Optional;
using Optional.Unsafe;

namespace Common.Extensions
{
    public static class OptionalExtensions
    {
        public static Option<TValue> SomeOrFailure<TValue>(this Option<TValue> value, bool condition)
        {
            if (value.HasValue)
            {
                return value;
            }

            if (condition)
            {
                throw new Exception("Expected Some option");
            }

            return value;
        }

        public static Option<TValue> NoneOrFailure<TValue>(this Option<TValue> value, bool condition)
        {
            if (!value.HasValue)
            {
                return value;
            }

            if (condition)
            {
                throw new Exception("Expected None option");
            }

            return value;
        }

        public static Option<TValue> AsOptional<TValue>(this TValue value) where TValue : class
        {
            return value == null ? Option.None<TValue>() : Option.Some(value);
        }

        public static Option<TValue> AsOptional<TValue>(this TValue? value) where TValue : struct
        {
            return value.ToOption();
        }

        public static Option<TValue> CreateIfNone<TValue>(this Option<TValue> option) where TValue : class, new()
        {
            if (!option.HasValue)
            {
                return new TValue().Some();
            }
            return option;
        }

        public static TValue ValueOrNew<TValue>(this Option<TValue> option) where TValue : class, new()
        {
            if (!option.HasValue)
            {
                return new TValue();
            }
            return option.ValueOrFailure();
        }

        public static TValue ValueOrNew<TValue>(this Option<TValue> option, [NotNull] Func<TValue> factory) where TValue : class
        {
            if (!option.HasValue)
            {
                return factory();
            }
            return option.ValueOrFailure();
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