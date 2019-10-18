using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Message;
using JetBrains.Annotations;

namespace BLL
{
    [UsedImplicitly]
    public class MessageService : GenericCrudService<MessageDisplay, MessageDetails, long>, IMessageService
    {
        public MessageService(IMessageRepository repository) : base(repository)
        {
        }
    }
}
