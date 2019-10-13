using System.Collections.Generic;
using Common.Table;
using Domain;
using JetBrains.Annotations;

namespace WebApp.Model
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public sealed class TableResponse<TDomain> where TDomain : IDomainBase
    {
        public List<TDomain> Data { get; }

        public PagingInfo PagingInfo { get; }

        public List<Filter> Filters { get; } 

        public List<SortOrder> Order { get; }

        public TableResponse(List<TDomain> data, List<Filter> filters, List<SortOrder> order, int filtered, int itemsPerPage, int currentPage)
        {
            Data = data ?? new List<TDomain>();
            Filters = filters ?? new List<Filter>();
            Order = order ?? new List<SortOrder>();

            PagingInfo = new PagingInfo(currentPage, filtered, itemsPerPage);
        }
    }
}