using DAL.Model;
using Domain.ManyToManyRelation;
using Domain.ManyToManyService;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace BLL.Infrastructure
{
    public interface IManyToManyServiceTr<TContext, TManyToMany, TLeftLink, TRightLink>
        where TContext : DbContext
        where TLeftLink : EntityBase
        where TRightLink : EntityBase
        where TManyToMany : EntityBase, IManyToMany<TLeftLink, TRightLink>, new()
    {
        List<ManyToManyRelationItemVm> GetRightItems(long id);
        void SaveRightItems(long leftEntityId, List<ManyToManySaveViewModel> rightItems);
    }
}