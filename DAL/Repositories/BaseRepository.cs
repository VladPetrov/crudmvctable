using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class BaseRepository<TContext, TKey> where TContext : DbContext
    {
        protected TContext Context { get; }

        protected ReferenceChecker<TKey> ReferenceChecker { get; }

        public BaseRepository(TContext context)
        {
            Context = context;
            ReferenceChecker = new ReferenceChecker<TKey>(context);
        }
    }
}
