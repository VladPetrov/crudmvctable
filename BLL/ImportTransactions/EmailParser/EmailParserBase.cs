using System;
using Common;
using Domain.Gmail;
using Domain.ImportTransactions;

namespace BLL.ImportTransactions.EmailParser
{
    public abstract class EmailParserBase : IEmailParser
    {
        public Bank Bank { get; }

        protected EmailParserBase(Bank bank)
        {
            Bank = bank;
        }

        public EmailParseResult ParseEmail(MessageDetails message)
        {
            try
            {
                return Parse(message);
            }
            catch (Exception e)
            {
                Log.Logger().Error(e, "Failed to import transaction form Email, Bank:'{bank}', EmailId:'{id}'", Bank.ToString(), message.UniqueId); //todo add log to db

                return EmailParseResult.CreateError(e.Message);
            }
        }

        protected abstract EmailParseResult Parse(MessageDetails message);
    }
}