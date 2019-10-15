using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Common;
using Common.Table;
using Domain;
using JetBrains.Annotations;

namespace WebApp.Model
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class TableRequest
    {
        public TableRequest(int itemsPerPage)
        {
            ItemsPerPage = itemsPerPage;
        }

        protected TableRequest(){}

        [Required]
        public List<Filter> Filters { get; set; } = new List<Filter>();

        [Required]
        public List<SortOrder> Orders { get; set; } = new List<SortOrder>();

        public int ItemsPerPage { get; set; } = 10;
        
        public ListRequest ToListRequest(int page)
        {
            Defensive.AssertTrue(page > 0, "Page can't be less than 1");

            var skip = (page - 1) * ItemsPerPage;

            return new ListRequest(Filters, Orders, skip, ItemsPerPage);
        }

        public TableResponse<TDto, TKey> FromListResult<TDto, TKey>(ListResult<TDto> result, int currentPage) where TDto : IDomain<TKey>
        {
            return result != null ? new TableResponse<TDto, TKey>(result.Data, Filters, Orders, result.Filtered, ItemsPerPage, currentPage) : null;
        }
    }

    public class ChildPageMusterFilter : TableRequest
    {
        public TableRequest Merge(TableRequest request)
        {
            var filters = Filters.ToList();
            filters.AddRange(request.Filters);

            var orders = Orders.ToList();
            orders.AddRange(request.Orders);

            return new TableRequest(request.ItemsPerPage)
            {
                Filters = filters,
                Orders = orders,
                ItemsPerPage = request.ItemsPerPage
            };
        }
    }
}