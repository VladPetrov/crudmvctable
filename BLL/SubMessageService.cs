using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Message;

namespace BLL
{
    public class SubMessageService : GenericCrudService<SubMessageDisplay, SubMessageDetails, long>, ISubMessageService
    {
        public SubMessageService(ISubMessageRepository repository) : base(repository)
        {
        }
    }
}
