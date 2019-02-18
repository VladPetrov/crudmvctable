using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace WebApp.Model.Transactions
{
    public class ImportTransactionsCsvVm
    {
        public List<IFormFile> Files { get; set; }

        public long EntityId { get; set; }
    }
}
