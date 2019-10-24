using System.Collections.Generic;
using System.Linq;
using AutoMapper.QueryableExtensions;
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

        public IEnumerable<PostExportDto> Export(IEnumerable<string> ids)
        {
            return Context.FirmPost.Where(x => ids.Contains(x.Id)).ProjectTo<PostExportDto>().ToList();
        }
    }
}
