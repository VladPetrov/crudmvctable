using Domain.ImportTransactions;

namespace DAL.Model
{
    public class TransactionThroughEmailImportInfo : EntityBase
    {
        public long LastImportedEmailId { get; set; }

        public Bank Bank { get; set; }
    }
}
