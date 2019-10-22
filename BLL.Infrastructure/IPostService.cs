using Domain.Post;

namespace BLL.Infrastructure
{
    public interface IPostService : IGenericCrudService<PostDisplay, PostDomain, string>
    {
    }
}
