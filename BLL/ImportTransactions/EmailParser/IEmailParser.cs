using Domain.Gmail;

namespace BLL.ImportTransactions.EmailParser
{
    public interface IEmailParser
    {
        EmailParseResult ParseEmail(MessageDetails message);
    }
}