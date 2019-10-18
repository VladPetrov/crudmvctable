using System;
using System.Linq;
using System.Linq.Expressions;
using AutoMapper;
using Common.Exceptions;
using Common.Extensions;
using Common.Table;
using DAL.Extensions;
using DAL.Infrastructure;
using Domain;
using Domain.DeleteResult;
using Microsoft.EntityFrameworkCore;
using Optional.Unsafe;

namespace DAL.Repositories
{
    public abstract class GenericCrudRepository<TContext, TEntity, TDisplay, TDomain, TKey> : BaseRepository<TContext, TKey>,
        IGenericCrudRepository<TDisplay, TDomain, TKey>
        where TEntity : class, IEntity<TKey>, new()
        where TDisplay : class, IDomain<TKey>
        where TDomain : class, IDomain<TKey>, new()
        where TContext : DbContext
    {
        protected GenericCrudRepository(TContext context) : base(context)
        {
        }

        protected DbSet<TEntity> Set => Context.Set<TEntity>();

        public virtual ListResult<TDisplay> List(ListRequest request)
        {
            return Set.ApplyTableRequest<TEntity, TDisplay, TKey>(request);
        }

        public virtual TDomain GetById(TKey id)
        {
            //return Set
            //    .FindOptional(id)
            //    .SomeOrEntityNotFoundException()
            //    //.Do(e => Context.Entry(e).GetDatabaseValues())
            //    .Map(Mapper.Map<TDomain>)
            //    .ValueOrFailure();

            var item = Set.AsNoTracking().FirstOrDefault(EqualsPredicate(id));

            if (item == null)
            {
                throw new EntityNotFoundException($"{typeof(TEntity).FullName} with {id}");
            }

            return Mapper.Map<TDomain>(item);
        }

        public virtual UpsertResult<TDomain> Upsert(TDomain domain)
        {
            var t = Mapper.Map<TEntity>(domain);

            var local = Set.Local.FirstOrDefault(EqualsPredicate(domain.Id).Compile());

            if (local != null)
            {
                Context.Entry(local).State = EntityState.Detached;
            }

            Set.Update(t);

            Context.SaveChanges();

            return UpsertResult<TDomain>.Ok(GetById(t.Id));

            //var saved = Set
            //    .FindOptional(domain.Id)
            //    .CreateIfNone()
            //    .MapFrom(domain)
            //    .MatchNew<TEntity, TKey>(entity => Set.Add(entity))
            //    .Do(Context.SaveChanges)
            //    .Map(entity => GetById(entity.Id))
            //    .ValueOrFailure();

            //return UpsertResult<TDomain>.Ok(saved);
        }

        public virtual DeleteResult Delete(TKey id)
        {
            return ReferenceChecker
                .Check(id)
                .OnDelete(() =>
                {
                    Set.FindOptional(id)
                        .MatchSome(entity =>
                        {
                            Set.Remove(entity);
                            Context.SaveChanges();
                        });
                });
        }

        protected static Expression<Func<TEntity, bool>> EqualsPredicate(TKey id)
        {
            Expression<Func<TEntity, TKey>> selector = x => x.Id;
            Expression<Func<TKey>> closure = () => id;
            return Expression.Lambda<Func<TEntity, bool>>(Expression.Equal(selector.Body, closure.Body), selector.Parameters);
        }
    }
}