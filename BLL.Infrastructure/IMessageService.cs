using Domain.Message;

namespace BLL.Infrastructure
{
    public interface IMessageService : IGenericCrudService<MessageDisplay, MessageDetails>
    {
    }
}
