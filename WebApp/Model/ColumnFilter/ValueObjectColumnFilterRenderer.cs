using DAL.Model;
using Domain;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Common.Extensions;
using WebApp.Model.GenericMvc;

namespace WebApp.Model.ColumnFilter
{
    public class ValueObjectColumnFilterRenderer<TDomain,TEntity> : IColumnFilterRenderer
        where TDomain : DomainBase
        where TEntity : EntityBase
    {
        private readonly Expression<Func<object, bool>> _predicate;
        private readonly string _fkFieldId;

        public ValueObjectColumnFilterRenderer(Expression<Func<TDomain, long>> fkSelector, Expression<Func<TEntity, bool>> predicate = null)
        {
            _fkFieldId = fkSelector.GetPropetyPath();

            if (predicate != null)
            {
                var parameter = Expression.Parameter(typeof(object));
                _predicate = Expression.Lambda<Func<object, bool>>(Expression.Invoke(predicate, Expression.Convert(parameter, typeof(TEntity))), parameter);
            }
        }

        public Task<IHtmlContent> RenderFilter(IHtmlHelper helper, TableFilterDescriptor descriptor)
        {
            var viewModel = new ValueObjectRendererViewModel
            {
                EntityType = typeof(TEntity),
                Descriptor = descriptor,
                Predicate = _predicate,
                ReplacedFieldId = _fkFieldId,
                ReplacedFilterValue = descriptor.Model.Filters.SingleOrDefault(x => x.FieldId == _fkFieldId)?.Value
            };

            return helper.PartialAsync("_ValueObjectFilter", viewModel);
        }
    }

    public class ValueObjectRendererViewModel
    {
        public Type EntityType { get; set; }

        public TableFilterDescriptor Descriptor { get; set; }

        public Expression<Func<object, bool>> Predicate { get; set; }

        public object ReplacedFilterValue { get; set; }

        public string ReplacedFieldId { get; set; }
    }
}
