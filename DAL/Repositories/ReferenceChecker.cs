using DAL.Model;
using Domain.DeleteResult;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using DAL.Infrastructure;

namespace DAL.Repositories
{
    public interface IReference<TKey>
    {
        Type Type { get; }

        int Count(TKey foreignKey, DbContext context);
    }

    public class ReferenceChecker<TKey>
    {
        private readonly List<IReference<TKey>> _references = new List<IReference<TKey>>();

        private readonly DbContext _context;

        public ReferenceChecker([NotNull] DbContext context)
        {
            _context = context;
        }

        public void RegisterReferences(params IReference<TKey>[] references)
        {
            _references.AddRange(references);
        }

        public DeleteResult Check(TKey id)
        {
            var result = new DeleteResult();

            foreach (var reference in _references)
            {
                var count = reference.Count(id, _context);

                if (count > 0)
                {
                    result.Add(count, reference.Type);
                }
            }

            return result;
        }
    }

    public class Reference<TEntity, TKey> : IReference<TKey> where TEntity : class, IEntity<TKey>
    {
        public Type Type { get; }

        private Expression<Func<TEntity, TKey>> ForeignKeyExpression { get; }

        private Expression<Func<TEntity, bool>> Predicate { get; }

        public Reference([NotNull] Expression<Func<TEntity, TKey>> foreignKeyExpression, Expression<Func<TEntity, bool>> predicate = null)
        {
            ForeignKeyExpression = foreignKeyExpression;
            Predicate = predicate;
            Type = typeof(TEntity);
        }

        public int Count(TKey foreignKey, [NotNull] DbContext context)
        {
            var query = context.Set<TEntity>().AsQueryable();

            if (Predicate != null)
            {
                query = query.Where(Predicate);
            }

            return query.Select(ForeignKeyExpression).AsEnumerable().Count(x => EqualityComparer<TKey>.Default.Equals(x, foreignKey));
        }
    }
}
