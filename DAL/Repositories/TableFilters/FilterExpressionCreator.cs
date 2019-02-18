using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Common.Table;

namespace DAL.Repositories.TableFilters
{
    internal static class FilterExpressionCreator
    {
        private static readonly Dictionary<FilterType, ColumnFilterBase> FilterTypeDictionary = new Dictionary<FilterType, ColumnFilterBase>
        {
            [FilterType.String] = new StringColumnFilter(),
            [FilterType.Number] = new NumericColumnFilter(),
            [FilterType.Currency] = new NumericColumnFilter(),
            [FilterType.Boolean] = new BooleanColumnFilter(),
            [FilterType.Enum] = new EnumColumnFilter(),
            [FilterType.Date] = new DateColumnFilter()
        };

        public static Expression<Func<TDomain, bool>> CreateFilterExpression<TEntity, TDomain>(IList<Filter> filters)
        {
            Expression<Func<TDomain, bool>> result;

            if (filters.Any())
            {
                var param = Expression.Parameter(typeof(TDomain), "item");
                result = Expression.Lambda<Func<TDomain, bool>>(CreateExpression<TEntity, TDomain>(filters, param), param);
            }
            else
            {
                result = item => true;
            }

            return result;
        }

        private static Expression CreateExpression<TEntity, TDomain>(IList<Filter> filters, ParameterExpression param)
        {
            Expression result;
            var groups = filters.GroupBy(f => f.Group, f => f, (key, group) => new { Group = key, Filters = group.ToList() }).Select(fs =>
            {
                if (string.IsNullOrEmpty(fs.Group))
                {
                    //default group - join expressions using AND
                    return fs.Filters
                        .Select(filter => FilterTypeDictionary[filter.Type].GetExpression(param, filter))
                        .Aggregate<Expression, Expression>(Expression.Constant(true), (accumulated, current) => Expression.AndAlso(accumulated, current));
                }
                //custom group - join expressions using OR
                return fs.Filters
                    .Select(filter => FilterTypeDictionary[filter.Type].GetExpression(param, filter))
                    .Aggregate<Expression, Expression>(Expression.Constant(false), (accumulated, current) => Expression.OrElse(accumulated, current));
            }).ToList();

            if (groups.Count > 1)
            {
                //join group expressions using AND
                result =  groups.Aggregate<Expression, Expression>(Expression.Constant(true), (accumulated, current) => Expression.AndAlso(accumulated, current));
            }
            else
            {
                result = groups.First();
            }
            

            return result;
        }
    }
}
