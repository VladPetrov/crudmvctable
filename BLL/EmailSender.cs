using System.Threading.Tasks;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Identity.UI.Services;

namespace BLL
{
    [UsedImplicitly]
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            return Task.CompletedTask;
        }
    }
}
