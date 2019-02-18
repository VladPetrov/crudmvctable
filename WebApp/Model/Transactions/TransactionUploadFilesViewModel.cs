using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace WebApp.Model.Transactions
{
    public class TransactionUploadFilesViewModel
    {
        public List<IFormFile> Files { get; set; }

        public long TransactionId { get; set; }

        public TransactionUploadFilesViewModel(){}

        public TransactionUploadFilesViewModel(long id)
        {
            TransactionId = id;
        }
    }
}
