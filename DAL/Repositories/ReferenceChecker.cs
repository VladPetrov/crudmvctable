using DAL.Model;
using Domain.DeleteResult;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DAL.Repositories
{
    public interface IReference
    {
        Type Type { get; }

        int Count(long foreignKey, DbContext context);
    }

    public class ReferenceChecker
    {
        private readonly List<IReference> _references = new List<IReference>();

        private readonly DbContext _context;

        public ReferenceChecker([NotNull] DbContext context)
        {
            _context = context;
        }

        public void RegisterReferences(params IReference[] references)
        {
            _references.AddRange(references);
        }

        public DeleteResult Check(long id)
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

    public class Reference<TEntity> : IReference where TEntity : EntityBase
    {
        public Type Type { get; }

        private Expression<Func<TEntity, long?>> ForeignKeyExpression { get; }

        private Expression<Func<TEntity, bool>> Predicate { get; }

        public Reference([NotNull] Expression<Func<TEntity, long?>> foreignKeyExpression, Expression<Func<TEntity, bool>> predicate = null)
        {
            ForeignKeyExpression = foreignKeyExpression;
            Predicate = predicate;
            Type = typeof(TEntity);
        }

        public int Count(long foreignKey, [NotNull] DbContext context)
        {
            var query = context.Set<TEntity>().AsQueryable();

            if (Predicate != null)
            {
                query = query.Where(Predicate);
            }

            return query.Select(ForeignKeyExpression).Count(x => x == foreignKey);
        }
    }
}
