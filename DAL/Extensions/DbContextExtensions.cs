using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using DAL.Model;

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

        public static bool FirmNameIsUnique(this DataBase context, string firmName, string excludeFirmId = null)
        {
            var query = context.ClientFirms.AsQueryable();

            if (excludeFirmId != null)
            {
                query = query.Where(x => x.Id != excludeFirmId);
            }

            return query.All(x => !string.Equals(x.Name, firmName, StringComparison.InvariantCultureIgnoreCase));
        }
    }
}
