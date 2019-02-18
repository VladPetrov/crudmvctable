using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using DAL.Model;
using Domain;

namespace DAL.Repositories
{
    public interface IValueObjectRepository
    {
        IEnumerable<ValueObject> GetItems(Type type, Expression<Func<object, bool>> predicate = null);

        IEnumerable<ValueObject> GetItems<T>(Expression<Func<T, bool>> predicate) where T : EntityBase;
    }
}