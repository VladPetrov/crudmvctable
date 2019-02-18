using Domain.Transaction;

namespace BLL.ImportTransactions.EmailParser
{
    public class EmailParseResult
    {
        public TransactionDomain Transaction { get; private set; }

        public string Error { get; private set; }

        public bool Successful => Error == null;

        private EmailParseResult(){}

        public static EmailParseResult CreateSuccess(TransactionDomain transaction)
        {
            return new EmailParseResult {Transaction = transaction};
        }

        public static EmailParseResult CreateError(string error)
        {
            return new EmailParseResult { Error = error };
        }
    }
}