using Domain.Gmail;
using System.Collections.Generic;

namespace BLL.Infrastructure
{
    public interface IGmailService
    {
        IEnumerable<MessageDetails> GetNotSeen(bool markAsSeen = true);

        IEnumerable<MessageDetails> GetAll(bool markAsSeen = true);

        IEnumerable<MessageDetails> GetAllWithIdGreaterThan(long id, bool markAsSeen = true);
    }
}