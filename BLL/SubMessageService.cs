using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Message;

namespace BLL
{
    public class SubMessageService : GenericCrudServise<SubMessageDisplay, SubMessageDetails>, ISubMessageService
    {
        public SubMessageService(ISubMessageRepository repository) : base(repository)
        {
        }
    }
}
