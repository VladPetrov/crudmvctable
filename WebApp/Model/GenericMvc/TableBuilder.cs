using Common.Extensions;
using System;
using System.Linq.Expressions;
using WebApp.Model.ColumnFilter;
using WebApp.Model.ColumnSort;
using WebApp.Model.TableRenders;
using WebApp.Model.TableRenders.Renders;

namespace WebApp.Model.GenericMvc
{
    public class TableBuilder<T>
    {
        private readonly TableDescriptor _descriptor;
        
        private TableBuilder()
        {
            _descriptor = new TableDescriptor();
        }
        
        public TableBuilder<T> AddColumn<TResult>(Expression<Func<T, TResult>> expression, IColumnRenderer columnRenderer = null)
        {
            _descriptor.Columns.Add(new TableColumnDescriptor
            {
                DisplayName          = (expression.Body as MemberExpression)?.Member.GetDisplayName(),
                FieldId              = expression.GetPropetyPath(),
                FiledType            = typeof(TResult),
                DataSelector         = expression.Compile(),
                ColumnRenderer       = columnRenderer ?? new DefaultColumnRenderer(),
                ColumnFilterRenderer = new DefaultColumnFilterRenderer(),
                ColumnSortRenderer   =  new DefaultColumnSortRenderer()
            });

            return this;
        }

        public TableBuilder<T> AddColumn<TResult>(Expression<Func<T, TResult>> filedSelector, RowOptions options)
        {
            _descriptor.Columns.Add(new TableColumnDescriptor
            {
                DisplayName          = (filedSelector.Body as MemberExpression)?.Member.GetDisplayName(),
                FieldId              = filedSelector.GetPropetyPath(),
                FiledType            = typeof(TResult),
                DataSelector         = filedSelector.Compile(),
                ColumnRenderer       = options.ColumnRenderer ?? new DefaultColumnRenderer(),
                ColumnFilterRenderer = options.FilterRenderer ?? new DefaultColumnFilterRenderer(),
                ColumnSortRenderer   = options.SortRenderer ?? new DefaultColumnSortRenderer(),
                ColumnClass          = options.ColumnClass
            });

            return this;
        }

        public TableBuilder<T> AddRowRenderer(IRowStyler styler)
        {
            _descriptor.RowStyler = styler;

            return this;
        }

        public TableBuilder<T> QuickMenuAddLink(UrlDescriptor url, string text, string icon = null)
        {
            _descriptor.QuickMenu.AddLink(url, text, icon);

            return this;
        }

        public TableBuilder<T> QuickMenuAddButton(UrlDescriptor url, string text, MetronicColor color = MetronicColor.success, string @class = null)
        {
            _descriptor.QuickMenu.AddButton(url, text, color, @class);

            return this;
        }

        public TableBuilder<T> AddRowsSelect()
        {
            _descriptor.RowsSelect = true;

            return this;
        }

        public TableDescriptor Build()
        {
            return _descriptor;
        }

        public static TableBuilder<T> CreateNew()
        {
            return new TableBuilder<T>();
        }
    }

    public class RowOptions
    {
        public IColumnRenderer ColumnRenderer { get; set; }
        public IColumnSortRenderer SortRenderer { get; set; }
        public IColumnFilterRenderer FilterRenderer { get; set; }
        public string ColumnClass { get; set; }
    }
}