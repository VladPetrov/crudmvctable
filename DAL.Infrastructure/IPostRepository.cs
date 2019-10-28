using System.Collections.Generic;
using Domain.Post;

namespace DAL.Infrastructure
{
    public interface IPostRepository : IGenericCrudRepository<PostDisplay, PostDomain, string>
    {
        IEnumerable<PostDto> Export(IEnumerable<string> ids);
    }
}
