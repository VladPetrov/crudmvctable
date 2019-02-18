using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace DAL.Extensions
{
    internal static class PropertyExpressionExtensions
    {
        public static Expression CreatePropertyExpression(this List<string> path, ParameterExpression parameter)
        {
            if (path == null || !path.Any() || path.Count > 2)
            {
                throw new ArgumentException(nameof(path));
            }

            return CreateExpression(path, parameter);
        }

        public static Expression CreatePropertyNotNullExpression(this string path, ParameterExpression parameter)
        {
            if (path == null)
            {
                throw new ArgumentException(nameof(path));
            }

            return Expression.NotEqual(CreateExpression(new[] { path }, parameter), Expression.Constant(null));
        }

        public static LambdaExpression CreateLambdaExpression<TDomain>(this List<string> path)
        {
            if (path == null || !path.Any())
            {
                throw new ArgumentException(nameof(path));
            }
            
            var parameter = Expression.Parameter(typeof(TDomain), "entity");

            var expression = CreateExpression(path, parameter);

            return Expression.Lambda(expression, parameter);
        }

        private static Expression CreateExpression(IEnumerable<string> path, ParameterExpression parameter)
        {
            var property = path.Aggregate<string, Expression>(parameter, Expression.PropertyOrField);

            var propertyInfo = (PropertyInfo) ((MemberExpression) property).Member;

            var type = propertyInfo.PropertyType;

            var baseType = Nullable.GetUnderlyingType(type);

            if (baseType != null)
            {
                type = baseType;
            }

            if (Nullable.GetUnderlyingType(property.Type) != null)
            {
                property = Expression.Convert(property, type);
            }

            return property;
        }
    }
}