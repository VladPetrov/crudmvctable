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
    public class ValueObjectRepository : BaseRepository<DbContext, long>, IValueObjectRepository
    {
        public ValueObjectRepository(DataBase context) : base(context)
        {
        }

        public IEnumerable<ValueObject> GetItems<T>() where T : EntityBase
        {
            return GetItems<T>(null);
        }

        public IEnumerable<ValueObject> GetItems<T>(Expression<Func<T, bool>> predicate) where T : EntityBase
        {
            var query = Context.Set<T>().AsQueryable();

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            return query.ProjectTo<ValueObject>().ToList();
        }
    }
}
