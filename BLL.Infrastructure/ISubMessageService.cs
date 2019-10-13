using Domain.Message;

namespace BLL.Infrastructure
{
    public interface ISubMessageService : IGenericCrudService<SubMessageDisplay, SubMessageDetails, long>
    {
    }
}
