using System.Collections.Generic;
using AutoMapper;
using Common;
using DAL.Model;
using Domain;
using Domain.List;

namespace DAL.Repositories
{
    public class DomainToEntityListMapper<TSourse, TDestination> : ITypeConverter<DomainList<TSourse>, List<TDestination>>
        where TSourse : DomainBase
        where TDestination : EntityBase
    {
        public List<TDestination> Convert(DomainList<TSourse> domainList, List<TDestination> entityList, ResolutionContext context)
        {
            CollectionProcessor.Process(domainList, entityList);

            return entityList;
        }
    }

    public class DomainToEntityICollectionMapper<TSourse, TDestination> : ITypeConverter<DomainList<TSourse>, ICollection<TDestination>>
        where TSourse : DomainBase
        where TDestination : EntityBase
    {
        public ICollection<TDestination> Convert(DomainList<TSourse> domainList, ICollection<TDestination> entityList, ResolutionContext context)
        {
            CollectionProcessor.Process(domainList, entityList);

            return entityList;
        }
    }

    public class EntityToDomainListMapper<TSourse, TDestination> : ITypeConverter<List<TSourse>, DomainList<TDestination>>
        where TDestination : DomainBase
        where TSourse : EntityBase
    {
        public DomainList<TDestination> Convert(List<TSourse> source, DomainList<TDestination> destination, ResolutionContext context)
        {
            Defensive.AssertNotNull(source, $"List of type {typeof(List<TSourse>).FullName} is null");
           
            var items = Mapper.Map<List<TDestination>>(source);

            return new DomainList<TDestination>(items);
        }
    }

    public class EntityToDomainICollectionMapper<TSourse, TDestination> : ITypeConverter<ICollection<TSourse>, DomainList<TDestination>>
        where TDestination : DomainBase
        where TSourse : EntityBase
    {
        public DomainList<TDestination> Convert(ICollection<TSourse> source, DomainList<TDestination> destination, ResolutionContext context)
        {
            Defensive.AssertNotNull(source, $"List of type {typeof(ICollection<TSourse>).FullName} is null");

            var items = Mapper.Map<List<TDestination>>(source);

            return new DomainList<TDestination>(items);
        }
    }
}