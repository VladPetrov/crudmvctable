using Common;
using Common.Extensions;
using System;
using System.Linq.Expressions;
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
                Readonly = @readonly
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
                HtmlAttributes = options?.HtmlAttributes
            });

            return this;
        }
        
        public FormDescriptor Build()
        {
            Defensive.AssertTrue(Descriptor.Items.Count > 0, "Form has no items specified");

            return Descriptor;
        }

        public static FormBuilder<T> CreateNew(bool @readonly, string action = null, string formName = null)
        {
            return new FormBuilder<T>(@readonly, action, formName);
        }
    }
}