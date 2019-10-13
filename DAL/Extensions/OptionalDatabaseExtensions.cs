using System;
using System.Linq;
using System.Linq.Expressions;
using AutoMapper;
using Common;
using Common.Exceptions;
using Common.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Microsoft.EntityFrameworkCore;
using Optional;

namespace DAL.Extensions
{
    public static class OptionalDalExtensions
    {
        public static Option<TValue> MapFrom<TValue, TResult>(this Option<TValue> option, TResult details)
        {
            return option.Do(value => Mapper.Map(details, value));
        }
        
        public static Option<TEntity> FindOptional<TEntity>(this IQueryable<TEntity> source, Expression<Func<TEntity, bool>> predicate) where TEntity : class
        {
            return source.FirstOrDefault(predicate).AsOptional();
        }
        
        public static Option<TEntity> FindOptional<TEntity, TKey>(this DbSet<TEntity> dbSet, TKey key) where TEntity : class
        {
            return dbSet.Find(key).AsOptional();
        }

        public static Option<TValue> SomeOrEntityNotFoundException<TValue>(this Option<TValue> value)
        {
            if (value.HasValue)
            {
                return value;
            }
            
            throw new EntityNotFoundException($"{typeof(TValue)}");
        }

        public static Option<TEntity> MatchNew<TEntity, TKey>(this Option<TEntity> option, Action<TEntity> action) where TEntity : IEntity<TKey>
        {
            return option.Do(value =>
            {
                if (value.IsNew)
                {
                    action.Invoke(value);
                }
            });
        }
    }
}