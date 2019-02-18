using AutoMapper;
using AutoMapper.QueryableExtensions;
using Common;
using Common.Table;
using DAL.Infrastructure;
using DAL.Repositories.TableFilters;
using Domain;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DAL.Extensions
{
    public static class TableExtensions
    {
        public static ListResult<TDomain> ApplyTableRequest<TEntity, TDomain>(this IQueryable<TEntity> query, ListRequest request, params SortOrder[] sortOrders) 
            where TEntity : IEntity
            where TDomain : DomainBase
        {
            var totalCount = query.Count();
            var filtered = totalCount;

            var domainQuery = query.ProjectTo<TDomain>();

            Defensive.AssertNotNull(domainQuery);

            if (request.Filters.Any())
            {
                domainQuery = domainQuery.Where(FilterExpressionCreator.CreateFilterExpression<TEntity, TDomain>(request.Filters));
                filtered = domainQuery.Count();
            }

            domainQuery = Sort(domainQuery, sortOrders, request.Sorts);

            if (!request.SkipPaging)
            {
                domainQuery = domainQuery.Skip(request.Skip);

                if (request.Take > 0)
                {
                    domainQuery = domainQuery.Take(request.Take);
                }
            }

            List<TDomain> list = domainQuery.ToList();

            var config = Mapper.Configuration.FindTypeMapFor<TEntity, TDomain>();
            var hasAfterMap = config != null && config.AfterMapActions.Any();

            if (hasAfterMap)
            {
                //second pass TDomain => TDomain to apply AfterMap
                list = list.Select(x => Mapper.Map<TDomain>(x)).ToList();
            }

            return new ListResult<TDomain>(list, filtered, totalCount);
        }

        public static IQueryable<TDomain> ApplyTableRequestIQueryable<TEntity, TDomain>(this IQueryable<TEntity> query, ListRequest request, params SortOrder[] sortOrders)
            where TEntity : IEntity
            where TDomain : DomainBase
        {
            var domainQuery = query.ProjectTo<TDomain>();

            Defensive.AssertNotNull(domainQuery);

            if (request.Filters.Any())
            {
                domainQuery = domainQuery.Where(FilterExpressionCreator.CreateFilterExpression<TEntity, TDomain>(request.Filters));
            }

            domainQuery = Sort(domainQuery, sortOrders, request.Sorts);

            if (!request.SkipPaging)
            {
                domainQuery = domainQuery.Skip(request.Skip);

                if (request.Take > 0)
                {
                    domainQuery = domainQuery.Take(request.Take);
                }
            }

            return domainQuery;
        }

        private static IQueryable<TDomain> Sort<TDomain>(IQueryable<TDomain> domainQuery, SortOrder[] sortOrders, List<SortOrder> sorts) where TDomain : DomainBase
        {
            var orders = new List<SortOrder>(sortOrders);

            orders.AddRange(sorts);

            if (!orders.Any())
            {
                domainQuery = domainQuery.OrderBy(x => x.Id);
            }
            else
            {
                foreach (var sort in orders)
                {
                    domainQuery = domainQuery.OrderBy(sort.Path.CreateLambdaExpression<TDomain>(), sort.Direction);
                }
            }

            return domainQuery;
        }

        #region OderByHelper
        private static IQueryable<TEntity> OrderBy<TEntity>(this IQueryable<TEntity> query, LambdaExpression expression, OrderDirection direction) where TEntity : class
        {
            return direction == OrderDirection.Asc ? query.OrderBy(expression) : query.OrderByDescending(expression);
        }
        
        private static IQueryable<TEntity> OrderBy<TEntity>(this IQueryable<TEntity> query, LambdaExpression expression) where TEntity : class
        {
            var orderBy = typeof(Queryable).GetMethods().First(m => m.Name == "OrderBy" && m.GetParameters().Length == 2).MakeGenericMethod(typeof(TEntity), expression.ReturnType);

            return (IQueryable<TEntity>)orderBy.Invoke(null, new object[] { query, expression });
        }

        private static IQueryable<TEntity> OrderByDescending<TEntity>(this IQueryable<TEntity> query, LambdaExpression expression) where TEntity : class
        {
            var orderByDescending = typeof(Queryable).GetMethods().First(m => m.Name == "OrderByDescending" && m.GetParameters().Length == 2).MakeGenericMethod(typeof(TEntity), expression.ReturnType);

            return (IQueryable<TEntity>)orderByDescending.Invoke(null, new object[] { query, expression });
        }
        #endregion
    }
}
