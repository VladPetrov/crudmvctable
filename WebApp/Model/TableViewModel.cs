using Common.Table;
using Domain;
using System;
using System.Collections.Generic;


namespace WebApp.Model
{
    public class TableViewModel
    {
        public List<DomainBase> Data { get; }

        public Type DataType { get; }

        public PagingInfo PagingInfo { get; }

        public List<Filter> Filters { get; }

        public List<SortOrder> Orders { get; }
        
        public TableViewModel(List<DomainBase> data, Type dataType, List<Filter> filters, List<SortOrder> order, PagingInfo pagingInfo)
        {
            Data = data ?? new List<DomainBase>();
            DataType = dataType;
            Filters = filters ?? new List<Filter>();
            Orders = order ?? new List<SortOrder>();

            PagingInfo = pagingInfo;
        }
    }
}
