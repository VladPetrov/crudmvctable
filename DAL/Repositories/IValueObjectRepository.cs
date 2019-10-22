using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using DAL.Model;
using Domain;

namespace DAL.Repositories
{
    public interface IValueObjectRepository
    {
        IEnumerable<IValueObject> GetItems<T>(Expression<Func<T, bool>> predicate) where T : EntityBase;
        IEnumerable<IValueObject> GetItems<T>() where T : EntityBase;
    }
}