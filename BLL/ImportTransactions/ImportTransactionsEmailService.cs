using BLL.ImportTransactions.EmailParser;
using BLL.Infrastructure;
using Domain.ImportTransactions;
using System;
using System.Linq;
using Common;
using DAL.Infrastructure;

namespace BLL.ImportTransactions
{
    public class ImportTransactionsEmailService : IImportTransactionsEmailService
    {
        private IGmailService GmailService { get; }
        private ITransactionService TransactionService { get; }

        private ITransactionThroughEmailInfoRepository ImportInfoRepository {get;}

        public ImportTransactionsEmailService(IGmailService gmailService, 
                                              ITransactionService transactionService, 
                                              ITransactionThroughEmailInfoRepository importInfoRepository)
        {
            GmailService = gmailService;
            TransactionService = transactionService;
            ImportInfoRepository = importInfoRepository;
        }

        public void ImportTransactions()
        {
            Log.Logger().Information("Starting import transactions form Email");

            foreach (Bank bank in Enum.GetValues(typeof(Bank)))
            {
                var parser = ParserFactory.GetParcer(bank);
                
                var emails = GmailService.GetAllWithIdGreaterThan(ImportInfoRepository.GetLastImportedId(bank)).ToList();

                if (emails.Any())
                {
                    ImportInfoRepository.SetLastImportedId(bank, emails.Select(x => x.UniqueId).Max());

                    Log.Logger().Information("Found {number} emails for Bank '{bank}'", emails.Count, bank.ToString());
                }
                else
                {
                    Log.Logger().Information("No emails were found for Bank '{bank}'", bank.ToString());
                }
                    
                emails.ForEach(email =>
                {
                    var result = parser.ParseEmail(email);

                    if (result.Successful)
                    {
                        TransactionService.Upsert(result.Transaction);
                        Log.Logger().Information("Imported transaction from emailId: {id}, Bank '{bank}'", email.UniqueId, bank.ToString());
                    }
                    else
                    {
                        Log.Logger().Warning("Transaction Imported failed from emailId: {id}, Bank '{bank}'", email.UniqueId, bank.ToString());
                    }
                });
            }
        }
    }
}
