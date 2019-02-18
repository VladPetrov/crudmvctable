using Common.Exceptions;
using Domain.ImportTransactions;

namespace BLL.ImportTransactions.EmailParser
{
    internal static class ParserFactory
    {
        public static IEmailParser GetParcer(Bank bank)
        {
            switch (bank)
            {
                case Bank.FioBanka: 
                    return new FioBankaEmailParser();
                default:
                    throw  new SwitchExpressionValueException(bank);
            }
        }
    }
}
