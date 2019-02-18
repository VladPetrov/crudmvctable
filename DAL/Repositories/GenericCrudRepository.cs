using AutoMapper;
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
    public abstract class GenericCrudRepository<TContext, TEntity, TDto, TDomain> : BaseRepository<TContext>,
        IGenericCrudRepository<TDto, TDomain>
        where TEntity : class, IEntity, new()
        where TDto : DomainBase
        where TDomain : DomainBase, new()
        where TContext : DbContext
    {
        protected GenericCrudRepository(TContext context) : base(context)
        {
        }

        protected DbSet<TEntity> Set => Context.Set<TEntity>();

        public virtual ListResult<TDto> List(ListRequest request)
        {
            return Set.ApplyTableRequest<TEntity, TDto>(request);
        }

        public virtual TDomain GetById(long id)
        {
            return Set
                .FindOptional(id)
                .SomeOrEntityNotFoundException()
                .Do(e => Context.Entry(e).GetDatabaseValues())
                .Map(Mapper.Map<TDomain>)
                .ValueOrFailure();
        }

        public virtual UpsertResult<TDomain> Upsert(TDomain domain)
        {
            var saved = Set
                .FindOptional(domain.Id)
                .CreateIfNone()
                .MapFrom(domain)
                .MatchNew(entity => Set.Add(entity))
                .Do(Context.SaveChanges)
                .Map(entity => GetById(entity.Id))
                .ValueOrFailure();

            return UpsertResult<TDomain>.Ok(saved);
        }

        public virtual DeleteResult Delete(long id)
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
    }
}