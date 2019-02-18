using DAL.Infrastructure;
using DAL.Model;
using Domain.Message;
using JetBrains.Annotations;

namespace DAL.Repositories
{
    [UsedImplicitly]
    public class MessageRepository : GenericCrudRepository<DataBase, Message, MessageDisplay, MessageDetails>, IMessageRepository
    {
        public MessageRepository(DataBase context) : base(context)
        {
        }
    }
}
