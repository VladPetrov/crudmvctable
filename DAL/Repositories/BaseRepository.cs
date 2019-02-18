using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class BaseRepository<TContext> where TContext : DbContext
    {
        protected TContext Context { get; }

        protected ReferenceChecker ReferenceChecker { get; }

        public BaseRepository(TContext context)
        {
            Context = context;
            ReferenceChecker = new ReferenceChecker(context);
        }
    }
}
