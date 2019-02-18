using System.Collections.Generic;

namespace WebApp.Model.Transactions
{
    public class EditProjectAndCategoryRequest
    {
        public List<long> TransactionIds { get; set; } = new List<long>();
        public long ProjectId { get; set; }
        public long CategoryId { get; set; }
    }
}
