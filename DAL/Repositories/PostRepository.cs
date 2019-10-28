using System.Collections.Generic;
using System.Linq;
using AutoMapper.QueryableExtensions;
using Common.Table;
using DAL.Extensions;
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

        public IEnumerable<PostDto> Export(IEnumerable<string> ids)
        {
            return Context.FirmPost.Where(x => ids.Contains(x.Id)).ProjectTo<PostDto>().ToList();
        }

        public override ListResult<PostDisplay> List(ListRequest request)
        {
            return Set.ApplyTableRequest<FirmPost, PostDisplay, string>(SetDefaultSort(request));
        }

        private ListRequest SetDefaultSort(ListRequest request)
        {
            if (request.Sorts.Any())
            {
                return request;
            }

            return new ListRequest(request.Filters,
                                    new List<SortOrder>
                                    {
                                        new SortOrder(nameof(PostDisplay.DeliveredDate), OrderDirection.Desc)
                                    },
                                    request.Skip,
                                    request.Take,
                                    request.SkipPaging);
        }
    }
}
