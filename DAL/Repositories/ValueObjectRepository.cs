using AutoMapper.QueryableExtensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DAL.Repositories
{
    public class ValueObjectRepository<TValueObject, TKey> : IValueObjectRepository<TValueObject, TKey>
        where TValueObject : IValueObject<TKey>
    {
        private DataBase Context { get; }

        public ValueObjectRepository(DataBase context)
        {
            Context = context;
        }

        public IEnumerable<IValueObject<TKey>> GetItems<T>() where T : class, IEntity<TKey>
        {
            return GetItems<T>(null);
        }

        public IEnumerable<IValueObject<TKey>> GetItems<T>(Expression<Func<T, bool>> predicate) where T : class, IEntity<TKey>
        {
            var query = Context.Set<T>().AsQueryable();

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            return query.ProjectTo<TValueObject>().ToList().Cast<IValueObject<TKey>>().ToList();
        }
    }
}
