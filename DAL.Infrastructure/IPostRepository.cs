using Domain.Post;

namespace DAL.Infrastructure
{
    public interface IPostRepository : IGenericCrudRepository<PostDisplay, PostDomain, string>
    {
    }
}
