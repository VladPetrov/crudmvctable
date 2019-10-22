using DAL.Infrastructure;
using DAL.Model;
using Domain.Post;

namespace DAL.Repositories
{
    public class PostRepository : GenericCrudRepository<DataBase, FirmPost, PostDisplay, PostDomain, string>, IPostRepository
    {
        public PostRepository(DataBase context) : base(context)
        {
        }
    }
}
