using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Post;

namespace BLL
{
    public class PostService : GenericCrudService<PostDisplay, PostDomain, string>, IPostService
    {
        public PostService(IPostRepository repository) : base(repository)
        {
        }
    }
}
