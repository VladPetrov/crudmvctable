using Common;
using Common.Extensions;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Common.Attributes;
using Common.Exceptions;
using WebApp.Model.TableRenders;

namespace WebApp.Model.Forms
{
    public sealed class FormBuilder<T>
    {
        private FormDescriptor Descriptor { get; }
        
        private FormBuilder(bool @readonly, string action, string formName)
        {
            Descriptor = new FormDescriptor(@readonly, action, formName);
        }

        public FormBuilder<T> AddItem<TResult>(Expression<Func<T, TResult>> expression, bool @readonly = false, IFormItemRenderer columnRenderer = null)
        {
            Descriptor.AddItem(new FormItemsDescriptor
            {
                Name = expression.GetPropetyPath(),
                Type = typeof(TResult),
                Renderer = columnRenderer,
                Readonly = @readonly,
                HtmlAttributes = GetMergeCustomHtmlAttributes(expression.GetPropertyInfoFromMemberExpression())
            });

            return this;
        }

        public FormBuilder<T> AddItem<TResult>(Expression<Func<T, TResult>> expression, FormItemOptions options)
        {
            Descriptor.AddItem(new FormItemsDescriptor
            {
                Name = expression.GetPropetyPath(),
                Type = typeof(TResult),
                Renderer = options?.ColumnRenderer,
                Readonly = options?.Readonly ?? false,
                HtmlAttributes = GetMergeCustomHtmlAttributes(expression.GetPropertyInfoFromMemberExpression(), options?.HtmlAttributes)
            });

            return this;
        }
        
        public FormDescriptor Build()
        {
            Defensive.AssertTrue(Descriptor.Items.Count > 0, "Form has no items specified");

            return Descriptor;
        }

        private object GetMergeCustomHtmlAttributes(PropertyInfo propery, object htmlAttributes = null)
        {
            var customHtmlAttributes = propery.GetCustomAttributes(true)
                .Where(x => x is InputAttributesAttribute)
                .Cast<InputAttributesAttribute>()
                .Aggregate(new object(), (result, item) => result.Merge(item.Attributes));

            return customHtmlAttributes.Merge(htmlAttributes);
        }

        public static FormBuilder<T> CreateNew(bool @readonly, string action = null, string formName = null)
        {
            return new FormBuilder<T>(@readonly, action, formName);
        }
    }
}