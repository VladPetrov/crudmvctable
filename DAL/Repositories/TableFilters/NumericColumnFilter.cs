using System;
using System.ComponentModel;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using Common;
using Common.Exceptions;
using Common.Table;
using DAL.Extensions;

namespace DAL.Repositories.TableFilters
{
    public class NumericColumnFilter : ColumnFilterBase
    {
        protected override Expression GetFilterExpression(ParameterExpression param, Filter filter)
        {
            var field = filter.Path.CreatePropertyExpression(param);

            object val;
            try
            {
                var valStr = filter.Value.ToString().ToValidNumberInStr();

                val = TypeDescriptor.GetConverter(field.Type).ConvertFrom(valStr);
            }
            catch (Exception e)
            {
                Log.Logger().Warning(e, "Numeric convert failed");
                val = Activator.CreateInstance(field.Type);
            }

            ConstantExpression value = Expression.Constant(val);

            switch (filter.Operator)
            {
                case FilterOperator.Equal:
                    return Expression.Equal(field, value);
                case FilterOperator.NotEqual:
                    return Expression.NotEqual(field, value);
                case FilterOperator.GreaterThan:
                    return Expression.GreaterThan(field, value);
                case FilterOperator.GreaterThanOrEqual:
                    return Expression.GreaterThanOrEqual(field, value);
                case FilterOperator.LessThan:
                    return Expression.LessThan(field, value);
                case FilterOperator.LessThanOrEqual:
                    return Expression.LessThanOrEqual(field, value);
                default:
                    throw new SwitchExpressionValueException(filter.Operator);
            }
        }
    }
}
