using System;
using System.ComponentModel;
using System.Linq.Expressions;
using Common;
using Common.Exceptions;
using Common.Table;
using DAL.Extensions;

namespace DAL.Repositories.TableFilters
{
    public class DateColumnFilter : ColumnFilterBase
    {
        protected override Expression GetFilterExpression(ParameterExpression param, Filter filter)
        {
            var field = filter.Path.CreatePropertyExpression(param);

            ConstantExpression value = Expression.Constant(DateTimeContext.Parse(filter.Value.ToString()));

            DateTime? date = value.Value as DateTime?;

            if (date == null)
            {
                return null;
            }

            DateTime currentDate = ((DateTime)date).Date;
            DateTime nextDate = currentDate.AddDays(1);

            switch (filter.Operator)
            {
                case FilterOperator.Equal:
                case FilterOperator.Contains:
                    return Expression.AndAlso(
                        Expression.GreaterThanOrEqual(field, Expression.Constant(currentDate)),
                        Expression.LessThan(field, Expression.Constant(nextDate)));
                case FilterOperator.GreaterThan:
                    return Expression.GreaterThan(field, Expression.Constant(currentDate));
                case FilterOperator.GreaterThanOrEqual:
                    return Expression.GreaterThanOrEqual(field, Expression.Constant(currentDate));
                case FilterOperator.LessThan:
                    return Expression.LessThan(field, Expression.Constant(nextDate));
                case FilterOperator.LessThanOrEqual:
                    return Expression.LessThanOrEqual(field, Expression.Constant(nextDate));
                default:
                    throw new SwitchExpressionValueException(filter.Operator);
            }
        }
    }
}
