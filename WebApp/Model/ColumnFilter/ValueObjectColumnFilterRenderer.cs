using DAL.Model;
using Domain;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Common.Extensions;
using Configuration.IoC;
using DAL.Infrastructure;
using DAL.Repositories;
using WebApp.Model.GenericMvc;
using WebApp.Model.TableRenders.Renders;

namespace WebApp.Model.ColumnFilter
{
    public class ValueObjectColumnFilterRenderer<TDomain,TEntity, TValueObject, TKey> : IColumnFilterRenderer
        where TDomain : class, IDomain<TKey>
        where TEntity : class, IEntity<TKey>
        where TValueObject : IValueObject<TKey>
    {
        private readonly Expression<Func<TEntity, bool>> _predicate;
        private readonly string _fkFieldId;

        public ValueObjectColumnFilterRenderer(Expression<Func<TDomain, long>> fkSelector, Expression<Func<TEntity, bool>> predicate = null)
        {
            _fkFieldId = fkSelector.GetPropetyPath();
            _predicate = predicate;
        }

        public Task<IHtmlContent> RenderFilter(IHtmlHelper helper, TableFilterDescriptor descriptor)
        {
            var repository = (IValueObjectRepository<TValueObject, TKey>) Ioc.Container.GetInstance(typeof(IValueObjectRepository<TValueObject, TKey>));

            var items = repository.GetItems(_predicate).ToSelectListItems();

            var viewModel = new ValueObjectRendererViewModel
            {
                Items = items,
                ReplacedFieldId = _fkFieldId,
                ReplacedFilterValue = descriptor.Model.Filters.SingleOrDefault(x => x.FieldId == _fkFieldId)?.Value
            };

            return helper.PartialAsync("_ValueObjectFilter", viewModel);
        }
    }

    public class ValueObjectRendererViewModel
    {
        public List<SelectListItem> Items { get; set; }

        public object ReplacedFilterValue { get; set; }

        public string ReplacedFieldId { get; set; }
    }
}
