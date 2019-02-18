using System;
using System.Linq.Expressions;
using WebApp.Model.Forms;

namespace WebApp.Model.TableRenders.Renders
{
    public class ValueObjectViewModel
    {
        public static string Name => nameof(ValueObjectViewModel);

        public FormItemsDescriptor Descriptor  { get; set; }

        public Type Type { get; set; }

        public string OptionalLabel { get; set; }

        public Expression<Func<object, bool>> Predicate { get; set; }
    }
}
