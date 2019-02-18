using Common.Table;
using DAL.Extensions;
using JetBrains.Annotations;
using System.Linq.Expressions;

namespace DAL.Repositories.TableFilters
{
    public abstract  class ColumnFilterBase
    {
        [CanBeNull]
        public Expression GetExpression(ParameterExpression param, Filter filter)
        {
            var expression = GetFilterExpression(param, filter);

            return filter.Path.Count == 1 ? expression : Expression.AndAlso(filter.Path[0].CreatePropertyNotNullExpression(param), expression);
        }

        protected abstract Expression GetFilterExpression(ParameterExpression param, Filter filter);
    }
}
