using System;
using AutoMapper;
using BLL.Infrastructure;
using Common;
using Common.Table;
using DAL.Infrastructure;
using Domain.FileParser.Csv;
using Domain.Files;
using Domain.Transaction;
using System.Collections.Generic;
using Domain;

namespace BLL
{
    public class TransactionService : GenericCrudService<TransactionDisplay, TransactionDomain, long>, ITransactionService
    {
        private ITransactionRepository TransactionRepository { get; }

        public TransactionService(ITransactionRepository repository) : base(repository)
        {
            TransactionRepository = repository;
        }

        public FileDownloadable ExportTransactionsToCsv(ListRequest request)
        {
            var result = Repository.List(request);

            var name = $"Export for {DateTimeContext.Today.ToString("yyyy.MM.dd")}.csv";

            var items = Mapper.Map<List<TransactionsExportToCsvModel>>(result.Data);

            var exporter = new CsvExporter {Delimiter = ";"};

            return new FileDownloadable(name, "text/csv", exporter.Export(items));
        }

        public void EditNote(long transactionId, string note)
        {
            TransactionRepository.EditNote(transactionId, note);
        }

        public void EditCategoryAndProject(List<long> transactionIds, long projectId, long categoryId)
        {
            foreach (var id in transactionIds)
            {
                var transaction = Repository.GetById(id);
                transaction.Project = projectId > 0 ? new ValueObject{Id = projectId } : null;
                transaction.Category = categoryId > 0 ?  new ValueObject {Id = categoryId} : null;
                Repository.Upsert(transaction);
            }
        }
    }
}
