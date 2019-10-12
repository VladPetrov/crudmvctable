using System.Threading.Tasks;
using JetBrains.Annotations;


namespace BLL
{
    public interface IEmailSenderService
    {
        Task SendEmailAsync(string email, string subject, string message);
    }


    [UsedImplicitly]
    public class EmailSenderService : IEmailSenderService
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            return Task.CompletedTask;
        }
    }
}
