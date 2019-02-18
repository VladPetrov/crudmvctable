using System.ComponentModel;
using System.Linq.Expressions;
using Common.Exceptions;
using Common.Table;
using DAL.Extensions;

namespace DAL.Repositories.TableFilters
{
    public class BooleanColumnFilter : ColumnFilterBase
    {
        protected override Expression GetFilterExpression(ParameterExpression param, Filter filter)
        {
            var field = filter.Path.CreatePropertyExpression(param);

            //Boolean to Boolean convertion is impossible...
            ConstantExpression value = Expression.Constant(TypeDescriptor.GetConverter(field.Type).ConvertFrom(filter.Value.ToString()));

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
