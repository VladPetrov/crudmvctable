using Common.Table;
using Domain;
using System;
using System.Collections.Generic;

namespace WebApp.Model.GenericMvc
{
    public class MvcTableResponse
    {
        public List<DomainBase> Data { get; }

        public Type DataType { get; }

        public PagingInfo PagingInfo { get; }

        public List<Filter> Filters { get; }

        public List<SortOrder> Order { get; }

        public MvcTableResponse(List<DomainBase> data, Type dataType, List<Filter> filters, List<SortOrder> order, PagingInfo pagingInfo)
        {
            Data = data ?? new List<DomainBase>();
            DataType = dataType;
            Filters = filters ?? new List<Filter>();
            Order = order ?? new List<SortOrder>();

            PagingInfo = pagingInfo;
        }
    }
}
