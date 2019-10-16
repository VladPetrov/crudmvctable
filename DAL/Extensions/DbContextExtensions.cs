using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace DAL.Extensions
{
    public static class DbContextExtensions
    {
        public static IQueryable<object> Set(this DbContext context, Type t)
        {
            return (IQueryable<object>)context.GetType().GetMethod("Set").MakeGenericMethod(t).Invoke(context, null);
        }

        public static IQueryable<object> Cast(this IQueryable queryable, Type t)
        {
            return (IQueryable<object>)typeof(Queryable).GetMethod("Cast").MakeGenericMethod(t).Invoke(null, new []{queryable});
        }

        public static void SafeRemove<T>(this DbContext context, T obj) where T : class
        {
            if (obj != null)
            {
                context.Remove(obj);
            }
        }
    }
}
