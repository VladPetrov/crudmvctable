﻿using BLL.Infrastructure;
using Domain.Transaction;


namespace WebApp.Controllers
{
    public class TransactionTagsController : ChildPageCrudController<TransactionTagDetails, TransactionTagDetails>
    {
        public TransactionTagsController(ITransactionTagService service) : base(service){ }

        protected override string Title => "Tags";
    }
}