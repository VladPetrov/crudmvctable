using System;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using WebApp.Model.Forms;

namespace WebApp.Model.TableRenders.Renders
{
    public class ValueObjectRenderer<T> : IFormItemRenderer
    {
        private readonly string _optionalLabel;

        private readonly Expression<Func<object, bool>> _predicate;

        public ValueObjectRenderer(Expression<Func<T, bool>> predicate = null):this(null, predicate){}

        public ValueObjectRenderer(string optionalLabel, Expression<Func<T, bool>> predicate = null)
        {
            _optionalLabel = optionalLabel;

            if (predicate != null)
            {
                var parameter = Expression.Parameter(typeof(object));
                _predicate = Expression.Lambda<Func<object, bool>>(Expression.Invoke(predicate, Expression.Convert(parameter, typeof(T))), parameter);
            }
        }

        public async Task<IHtmlContent> RenderAsync(IHtmlHelper htmlHelper, FormItemsDescriptor descriptor)
        {
            var renderInfo = new ValueObjectViewModel
            {
                Descriptor = descriptor,
                OptionalLabel = _optionalLabel,
                Type = typeof(T),
                Predicate = _predicate
            };

            var dictionary = new ViewDataDictionary(htmlHelper.ViewData)
            {
                new KeyValuePair<string, object>(ValueObjectViewModel.Name, renderInfo)
            };

            return await htmlHelper.PartialAsync("_ValueObjectView", dictionary);
        }
    }
}
