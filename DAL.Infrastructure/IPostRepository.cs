using System.Collections.Generic;
using Domain.Post;

namespace DAL.Infrastructure
{
    public interface IPostRepository : IGenericCrudRepository<PostDisplay, PostDomain, string>
    {
        IEnumerable<PostExportDto> Export(IEnumerable<string> ids);
    }
}
