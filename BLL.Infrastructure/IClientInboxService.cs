using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Text;
using Domain;
using Domain.Inbox;

namespace BLL.Infrastructure
{
    public interface IClientInboxService
    {
        FirmsInfo GetFirms(string userId);

        List<LetterInfo> GetLetters(string firmId, string userId);
    }
}
