using System;
using System.Linq.Expressions;
using Common.Exceptions;
using Common.Table;
using DAL.Extensions;

namespace DAL.Repositories.TableFilters
{
    public class EnumColumnFilter : ColumnFilterBase
    {
        protected override Expression GetFilterExpression(ParameterExpression param, Filter filter)
        {
            var field = filter.Path.CreatePropertyExpression(param);

            //Everything is ok, heh...
            var value = Expression.Constant(Enum.Parse(field.Type, filter.Value.ToString()));

            switch (filter.Operator)
            {
                case FilterOperator.Equal:
                    return Expression.Equal(field, value);
                case FilterOperator.NotEqual:
                    return Expression.NotEqual(field, value);
                default:
                    throw new SwitchExpressionValueException(filter.Operator);
            }
        }
    }
}
