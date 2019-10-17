using System;
using System.Collections.Generic;
using System.Linq;
using Common.Exceptions;

namespace Common.Attributes
{
    [AttributeUsage(AttributeTargets.Property)]
    public class InputAttributesAttribute : Attribute
    {
        public object Attributes { get; protected set; } = new object();

        public InputAttributesAttribute(params object [] attributes)
        {
            attributes.ToList().ForEach(x => Attributes = Attributes.Merge(x));
        }
    }

    public class CurrencyAttribute : InputAttributesAttribute
    {
        public CurrencyAttribute() : base(new { currency = "currency"})
        {
        }
    }
}
