using Domain;
using JetBrains.Annotations;
using System;
using System.Linq;
using WebApp.Controllers;
using WebApp.Extensions;


namespace WebApp.Model.GenericMvc
{
    public static class Extensions
    {
        public static MvcTableResponse ToMvcTableResponse<TDomain>(this TableResponse<TDomain> response) where TDomain : DomainBase
        {
            return new MvcTableResponse(response.Data.Cast<DomainBase>().ToList(), typeof(TDomain), response.Filters, response.Order, response.PagingInfo);
        }

        public static TableViewModel ToTableViewModel(this MvcTableResponse response)
        {
            return new TableViewModel(
                response.Data,
                response.DataType,
                response.Filters,
                response.Order,
                response.PagingInfo);
        }

        public static PagingViewModel ToPagingViewModel(this TableViewModel tableModel, string action = nameof(GenericCrudController<DomainBase,DomainBase>.Table))
        {
            return new PagingViewModel(tableModel.PagingInfo, action);
        }

        public static TableFilterDescriptor ToFiltersDescriptor(this TableColumnDescriptor column, [CanBeNull] TableViewModel model)
        {
            return new TableFilterDescriptor
            {
                FieldId = column.FieldId,
                FiledType = column.FiledType,
                Model = model,
                ColumnFilterRenderer = column.ColumnFilterRenderer
            };
        }

        public static TableSortDescriptor ToSortDescriptor(this TableColumnDescriptor column, TableViewModel model)
        {
            return new TableSortDescriptor
            {
                FieldId = column.FieldId,
                Model = model,
                DisplayName = column.DisplayName,
                ColumnSortRenderer = column.ColumnSortRenderer
            };
        }

        public static string ToTableServiceName(this string controllerName)
        {
            return $"table_service_for_{controllerName.ToControllerName(false)}".ToLower();
        }

        public static string ToPageContainerId(this string controllerName)
        {
            return $"page_container_for_{controllerName.ToControllerName(false)}".ToLower();
        }

        public static string ToTableContainerId(this string controllerName)
        {
            return $"table_container_for_{controllerName.ToControllerName(false)}".ToLower();
        }

        public static string ToPageCollapseContainerId(this string controllerName)
        {
            return $"page_collapse_container_for_{controllerName.ToControllerName(false)}".ToLower();
        }

        public static string ManyToManyServiceName(this string controllerName)
        {
            return $"many_to_many_service_for_{controllerName.ToControllerName(false)}".ToLower();
        }

        public static string ToSessionKey(this string controllerName, SessionKeys key)
        {
            return $"{controllerName.ToControllerName()}.{Enum.GetName(typeof(SessionKeys), key)}";
        }

        public static int ToInt(this bool val)
        {
            return val ? 1 : 0;
        }
    }
}
