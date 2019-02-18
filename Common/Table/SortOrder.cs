using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Common.Extensions;

namespace Common.Table
{
    public class SortOrder
    {
        public SortOrder(string fieldId, OrderDirection direction)
        {
            FieldId = fieldId;
            Direction = direction;
        }

        public string FieldId { get; }

        public OrderDirection Direction { get; }

        public List<string> Path => FieldId.Split('.').Select(x => x.ToPascalCase()).ToList();

        public static SortOrder CreateOrder<TSource>(Expression<Func<TSource, object>> propertyLambda, OrderDirection direction) 
        {
            var expression = propertyLambda.Body as MemberExpression;

            Defensive.AssertNotNull(expression);

            var propInfo = expression.Member as PropertyInfo;

            Defensive.AssertNotNull(propInfo);

            return new SortOrder(propInfo.Name, direction);
        }
    }
}