using Domain.Inbox;
using System.Collections.Generic;

namespace BLL.Infrastructure
{
    public interface IClientInboxService
    {
        FirmsInfo GetFirms(string userId);

        List<LetterInfo> GetPost(string firmId, string userId);

        List<LetterInfo> GetForwarded(string userId);
    }
}
