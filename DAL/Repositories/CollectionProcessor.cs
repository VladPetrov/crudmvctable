using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Common;
using Domain;
using Common.Exceptions;
using DAL.Model;
using Domain.List;

namespace DAL.Repositories
{
    public static class CollectionProcessor
    {
        public static void Process<TSourse, TDestination>(DomainList<TSourse> domainList, ICollection<TDestination> entityList, Action<TSourse, TDestination> onAdd = null)
            where TSourse : DomainBase
            where TDestination : EntityBase
        {
            Defensive.AssertNotNull(domainList, $"Domain List of type {typeof(TSourse).FullName} is null");
            Defensive.AssertNotNull(entityList, $"Entity List of type {typeof(TDestination).FullName} is null");

            foreach (var domain in domainList.GetMappingList())
            {
                switch (domain.ChangeType)
                {
                    case ChangeType.Added:
                    {
                        var entity = Mapper.Map<TDestination>(domain);

                        onAdd?.Invoke(domain, entity);

                        entityList.Add(entity);

                        break;
                    }

                    case ChangeType.Deleted:
                    {
                        var entity = entityList.FirstOrDefault(x => x.Id == domain.Id);

                        if (entity != null)
                        {
                            entityList.Remove(entity);
                        }
                        break;
                    }

                    case ChangeType.Modified:
                    {
                        var entity = entityList.FirstOrDefault(x => x.Id == domain.Id);

                        if (entity != null)
                        {
                            Mapper.Map(domain, entity);
                        }
                        break;
                    }

                    case ChangeType.UnChanged:
                        break;

                    default: throw new SwitchExpressionValueException(domain.ChangeType);
                }
            }
        }
    }
}
