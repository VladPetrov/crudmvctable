using DAL.Infrastructure;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DAL.Repositories
{
    public interface IValueObjectRepository<out TValueObject, TKey> where TValueObject : IValueObject<TKey>
    {
        IEnumerable<IValueObject<TKey>> GetItems<T>(Expression<Func<T, bool>> predicate) where T : class, IEntity<TKey>;
        IEnumerable<IValueObject<TKey>> GetItems<T>() where T : class, IEntity<TKey>;
    }
}