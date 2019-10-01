using System;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Configuration.IoC;
using DAL.Model;
using DAL.Repositories;
using WebApp.Model.Forms;

namespace WebApp.Model.TableRenders.Renders
{
    public class ValueObjectRenderer<T> : IFormItemRenderer where T : EntityBase
    {
        private readonly string _optionalLabel;

        private readonly Expression<Func<T, bool>> _predicate;

        public ValueObjectRenderer(Expression<Func<T, bool>> predicate = null):this(null, predicate){}

        public ValueObjectRenderer(string optionalLabel, Expression<Func<T, bool>> predicate = null)
        {
            _optionalLabel = optionalLabel;
            _predicate = predicate;
        }

        public async Task<IHtmlContent> RenderAsync(IHtmlHelper htmlHelper, FormItemsDescriptor descriptor)
        {
            var repository = (IValueObjectRepository)Ioc.Container.GetInstance(typeof(IValueObjectRepository));

            var items = repository.GetItems(_predicate).ToSelectListItems();

            var renderInfo = new ValueObjectViewModel
            {
                Descriptor = descriptor,
                OptionalLabel = _optionalLabel,
                Items = items
            };

            var dictionary = new ViewDataDictionary(htmlHelper.ViewData)
            {
                new KeyValuePair<string, object>(ValueObjectViewModel.Name, renderInfo)
            };

            return await htmlHelper.PartialAsync("_ValueObjectView", dictionary);
        }
    }
}
