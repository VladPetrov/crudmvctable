﻿using BLL.Infrastructure;
using DAL.Infrastructure;
using Domain.Transaction;

namespace BLL
{
    public class TransactionTagService : GenericCrudServise<TransactionTagDetails, TransactionTagDetails, long>, ITransactionTagService
    {
        public TransactionTagService(ITransactionTagRepository repository) : base(repository){}
    }
}
