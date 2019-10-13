using Domain.Message;

namespace DAL.Infrastructure
{
    public interface ISubMessageRepository : IGenericCrudRepository<SubMessageDisplay, SubMessageDetails, long>
    {
    }
}
