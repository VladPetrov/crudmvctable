using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using AutoMapper;
using BLL.Infrastructure;
using Common;
using DAL.Infrastructure;
using Domain;
using Domain.FileParser;
using Domain.FileParser.Csv;
using Domain.Transaction;
using Domain.Transaction.CsvImport;
using JetBrains.Annotations;

namespace BLL.ImportTransactions
{
    [UsedImplicitly]
    public class TransactionCsvImportService : ITransactionCsvImportService
    {
        private static string FileFormat => ".csv";

        private ITransactionRepository Repository { get; }
        private IProjectRepository ProjectRepository { get; }
        private IEntityRepository EntityRepository { get; }
        private IFileUploadLogger UploadLogger { get; }

        public TransactionCsvImportService(ITransactionRepository repository, 
                                           IFileUploadLogger uploadLogger, 
                                           IProjectRepository projectRepository, 
                                           IEntityRepository entityRepository)
        {
            Repository = repository;
            UploadLogger = uploadLogger;
            ProjectRepository = projectRepository;
            EntityRepository = entityRepository;
        }

        public OperationResult<long> CreateLog(string fileName)
        {
            var logId = UploadLogger.CreateLog(fileName);

            return OperationResult.Ok().SetData(logId);
        }

        public void Import(Stream stream, string fileName, long entityId, long logId)
        {
            var format = Path.GetExtension(fileName);

            if (!string.Equals(format, FileFormat, StringComparison.InvariantCultureIgnoreCase))
            {
                var message = $"Unknown file {format} format detected";
                LogError(logId, message);
                UploadLogger.EndLog(logId);
                return;
            }

            ParseResult<TransactionFileRecordModel> result;

            try
            {
                result = ParseFile(stream);
            }
            catch (Exception ex)
            {
                var message = $"Failed to Parse File '{fileName}'";
                LogError(logId, message, ex);
                UploadLogger.EndLog(logId);
                return;
            }

            if (!result.Success)
            {
                result.Errors.ForEach(e => LogError(logId, $"File:'{fileName}', Error: {e}"));
            }

            ProcessRecords(logId, result.Records, fileName, entityId);

            UploadLogger.EndLog(logId);
        }

        private static ParseResult<TransactionFileRecordModel> ParseFile(Stream stream)
        {
            var parser = new CsvFileParser<TransactionFileRecordModel, TransactionFileRecordMap> {Delimiter = ";"};
            
            using (stream)
            {
                return parser.Parse(stream);
            }
        }

        private void ProcessRecords(long logId, List<TransactionFileRecordModel> records, string fileName, long entityId)
        {
            if (entityId == 0 && records.Count(x => string.IsNullOrEmpty(x.PayerAccount)) > records.Count/2)
            {
                LogError(logId, $"File '{fileName}' has no 'Payer Account' column specified, please select necessary 'Payer Account' in the dropdown.");
                return;
            }

            foreach (var record in records)
            {
                try
                {
                    var domain = Mapper.Map<TransactionDomain>(record);

                    if (!string.IsNullOrEmpty(record.PayerAccount))
                    {
                        domain.Entity = EntityRepository.FindEntityByIban(record.PayerAccount);

                        Defensive.AssertNotNull(domain.Entity, $"Entity with IBAN '{record.PayerAccount}' was not found");
                    }
                    else
                    {
                        Defensive.AssertTrue(entityId > 0, "Entity is not specified");

                        domain.Entity = new ValueObject { Id = entityId };
                    }

                    domain.RecipientEntity = EntityRepository.FindEntityByIban(record.ToAccount);

                    if (record.Note?.Trim() != null)
                    {
                        var prefix = Regex.Match(record.Note?.Trim(), @"^([A-Za-z0-9]*)[^, -_]*")?.Value?.ToLower(); //text before first space , - _

                        domain.Project = ProjectRepository.FindProjectByPrefixInNote(prefix);
                    }

                    var res = Repository.TryImportTransaction(domain);

                    if (res == TransactionImportResult.Success)
                    {
                        Log.Logger().Information("Transaction id '{id}' imported successfully", domain.IdOfTransaction);
                    }
                    else
                    {
                        Log.Logger().Warning("Transaction id '{id}' import failed with reason {reason}", domain.IdOfTransaction, res.ToString());
                    }
                    
                }
                catch (Exception e)
                {
                    LogError(logId, $"Failed to import record with id : {record.RowId}, File '{fileName}'", e);
                }
            }
        }

        private void LogError(long logId, string message, Exception ex = null)
        {
            UploadLogger.AddError(logId, $"{message}, Exception Message : {ex?.Message ?? "null"}");

            if (ex != null)
            {
                Log.Logger().Error(ex, message);
            }
            else
            {
                Log.Logger().Error(message);
            }
        }
    }
}
