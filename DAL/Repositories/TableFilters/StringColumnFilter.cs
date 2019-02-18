using System.ComponentModel;
using System.Linq.Expressions;
using System.Reflection;
using Common.Exceptions;
using Common.Table;
using DAL.Extensions;

namespace DAL.Repositories.TableFilters
{
    public class StringColumnFilter : ColumnFilterBase
    {
        private static readonly MethodInfo ContainsMethod = typeof(string).GetMethod("Contains", new[] {typeof(string)});

        private static readonly MethodInfo StartsWithMethod = typeof(string).GetMethod("StartsWith", new[] {typeof(string)});

        private static readonly MethodInfo EndsWithMethod = typeof(string).GetMethod("EndsWith", new[] {typeof(string)});

        protected override Expression GetFilterExpression(ParameterExpression param, Filter filter)
        {
            var field = filter.Path.CreatePropertyExpression(param);

            object val;

            if (field.Type.IsEnum)
            {
                val = TypeDescriptor.GetConverter(field.Type).ConvertFromString(filter.Value.ToString());
            }
            else
            {
                val = TypeDescriptor.GetConverter(field.Type).ConvertFrom(filter.Value);
            }

//            if (filter.Encrypted) //todo encription
//            {
//                var stringValue = val as string;
//
//                if (!string.IsNullOrEmpty(stringValue))
//                {
//                    filter.Operator = FilterOperator.Equal;
//
//                    val = AesEncryption.Encrypt(stringValue);
//                }
//            }

            ConstantExpression value = Expression.Constant(val);

            switch (filter.Operator)
            {
                case FilterOperator.Equal:
                    return Expression.Equal(field, value);
                case FilterOperator.NotEqual:
                    return Expression.NotEqual(field, value);
                case FilterOperator.StartsWith:
                    return Expression.Call(field, StartsWithMethod, value);
                case FilterOperator.Contains:
                    return Expression.Call(field, ContainsMethod, value);
                case FilterOperator.DoesNotContain:
                    return Expression.Not(Expression.Call(field, ContainsMethod, value));
                case FilterOperator.EndsWith:
                    return Expression.Call(field, EndsWithMethod, value);
                default:
                    throw new SwitchExpressionValueException(filter.Operator);
            }
        }
    }
}