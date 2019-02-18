using AutoMapper;
using AutoMapper.QueryableExtensions;
using DAL.Extensions;
using DAL.Model;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DAL.Repositories
{
    public class ValueObjectRepository : BaseRepository<DbContext>, IValueObjectRepository
    {
        public ValueObjectRepository(DataBase context) : base(context)
        {
        }
        
        public IEnumerable<ValueObject> GetItems(Type type, Expression<Func<object, bool>> predicate = null)
        {
            var items = Context.Set(type);

            if (predicate != null)
            {
                items = items.Where(predicate).Cast(type);
            }

            var filtered = items.ProjectTo<ValueObject>().ToList();

            var result = new List<ValueObject>();

            Mapper.Map(filtered, result, filtered.GetType(), result.GetType());

            return result;
        }

        public IEnumerable<ValueObject> GetItems<T>(Expression<Func<T, bool>> predicate) where T : EntityBase
        {
            return Context.Set<T>().Where(predicate).ProjectTo<ValueObject>().ToList();
        }
    }
}
