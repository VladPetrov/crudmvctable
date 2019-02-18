using AutoMapper.QueryableExtensions;
using DAL.Model;
using Domain;
using Domain.ManyToManyRelation;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BLL.Infrastructure;
using Domain.ManyToManyService;
using DAL.Extensions;

namespace BLL
{
    public class ManyToManyServiceTr<TContext, TManyToManyEntity, TLeftLink, TRightLink> : IManyToManyServiceTr<TContext, TManyToManyEntity, TLeftLink, TRightLink>
        where TContext : DbContext
        where TLeftLink : EntityBase
        where TRightLink : EntityBase
        where TManyToManyEntity : EntityBase, IManyToMany<TLeftLink, TRightLink>, new()
    {
        private TContext Context { get; }

        public ManyToManyServiceTr(TContext context)
        {
            Context = context;
        }

        public List<ManyToManyRelationItemVm> GetRightItems(long id)
        {
            var allItems = Mapper.Map<List<ManyToManyRelationItemVm>>(
                Context.Set(typeof(TRightLink))
                    .ProjectTo<ValueObject>()
                    .OrderBy(x => x.Name)
                    .ToList());

            var selectedIds = Context.Set<TManyToManyEntity>().Where(x => x.LeftLinkId == id).Select(x => x.RightLinkId).ToList();

            allItems.ForEach(x => x.IsSelected = selectedIds.Contains(x.Id));

            return allItems;
        }

        public void SaveRightItems(long leftEntityId, List<ManyToManySaveViewModel> rightItems)
        {
            ProcessDeleteItems(leftEntityId, rightItems.Where(x => x.Action == ManyToManySaveAction.Delete).Select(x => x.Id).ToList());
            ProcessAddItems(leftEntityId, rightItems.Where(x => x.Action == ManyToManySaveAction.Add).Select(x => x.Id).ToList());

            var t = Context.SaveChanges();
        }

        private void ProcessDeleteItems(long leftLinkFk, List<long> rightItems)
        {
            if (rightItems.Any())
            {
                Context.Set<TManyToManyEntity>()
                    .Where(x => x.LeftLinkId == leftLinkFk)
                    .Where(x => rightItems.Contains(x.RightLinkId))
                    .ToList()
                    .ForEach(x => Context.Remove(x));
            }
        }

        private void ProcessAddItems(long leftLinkFk, List<long> rightItems)
        {
            if (rightItems.Any())
            {
                rightItems.ForEach(x => Context.Add(new TManyToManyEntity { LeftLinkId = leftLinkFk, RightLinkId = x }));
            }
        }
    }
}