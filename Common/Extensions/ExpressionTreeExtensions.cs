using System;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace Common.Extensions
{
    public static class ExpressionTreesExtensions
    {
        public static string GetPropetyPath<T, P>(this Expression<Func<T, P>> expression)
        {
            MemberExpression memberExpression;
            var stb = new StringBuilder();

            switch (expression.Body.NodeType)
            {
                case ExpressionType.Convert:
                case ExpressionType.ConvertChecked:
                    memberExpression = (expression.Body is UnaryExpression unaryExpression ? unaryExpression.Operand : null) as MemberExpression;
                    break;
                default:
                    memberExpression = expression.Body as MemberExpression;
                    break;
            }

            while (memberExpression != null)
            {
                if (stb.Length > 0)
                {
                    stb.Append(".");
                }

                stb.Append(memberExpression.Member.Name);   

                memberExpression = memberExpression.Expression as MemberExpression;
            }

            return stb.ToString();
        }

        public static PropertyInfo GetPropertyInfoFromMemberExpression<TTarget, TValue>(this Expression<Func<TTarget, TValue>> expression)
        {
            var memberExpression = expression.Body as MemberExpression;
            Defensive.AssertNotNull(memberExpression);

            var propertyInfo = memberExpression.Member as PropertyInfo;
            Defensive.AssertNotNull(propertyInfo);

            return propertyInfo;
        }
    }
}
