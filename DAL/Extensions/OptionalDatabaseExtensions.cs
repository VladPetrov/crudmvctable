using System;
using System.Linq;
using System.Linq.Expressions;
using AutoMapper;
using Common;
using Common.Exceptions;
using Common.Extensions;
using DAL.Infrastructure;
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
        
        public static Option<TEntity> FindOptional<TEntity>(this IQueryable<TEntity> source, long key) where TEntity : class, IEntity
        {
            return source.FirstOrDefault(x => x.Id == key).AsOptional();
        }
       
        public static Option<TEntity> FindOptional<TEntity>(this DbSet<TEntity> dbSet, string key) where TEntity : class
        {
            return dbSet.Find(key).AsOptional();
        }
        
        public static Option<TEntity> FindOptional<TEntity>(this DbSet<TEntity> dbSet, long key) where TEntity : class
        {
            return dbSet.Find(key).AsOptional();
        }
        
        public static Option<TEntity> FindOptional<TEntity>(this DbSet<TEntity> dbSet, long? key) where TEntity : class
        {
            return key.AsOptional().FlatMap(id => dbSet.Find(id).AsOptional());
        }

        public static Option<TValue> SomeOrEntityNotFoundException<TValue>(this Option<TValue> value, long id = 0) where TValue : IEntity
        {
            if (value.HasValue)
            {
                return value;
            }

            if (id > 0)
            {
                throw new EntityNotFoundException(typeof(TValue), id);
            }

            throw new EntityNotFoundException(typeof(TValue));
        }

        public static Option<TEntity> MatchNew<TEntity>(this Option<TEntity> option, Action<TEntity> action) where TEntity : class, IEntity
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