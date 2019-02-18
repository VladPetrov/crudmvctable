using Domain.Message;

namespace DAL.Infrastructure
{
    public interface IMessageRepository: IGenericCrudRepository<MessageDisplay, MessageDetails>
    {
    }
}