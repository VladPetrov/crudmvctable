using Domain.Gmail;
using Domain.ImportTransactions;
using Domain.Transaction;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Common;

namespace BLL.ImportTransactions.EmailParser
{
    public class FioBankaEmailParser : EmailParserBase
    {
        public FioBankaEmailParser() : base(Bank.FioBanka){}

        private readonly List<string> _subjects = new List<string>{ "Fio banka - vydaj na konte" , "Fio banka - prijem na konte" } ;

        private string From => "automat@fio.cz";

        private readonly Regex[] _ibanRegEx = 
        {
            new Regex("(?:Protiúčet: )(?<iban>[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16})/", RegexOptions.Compiled),
            new Regex(@"(?:Protiúčet: )(?<iban>[\d]{10})/", RegexOptions.Compiled)
        };

        private readonly Regex _amountRegEx = new Regex(@"(?:Částka: )(?<amount>[\d, ]*)", RegexOptions.Compiled);

        private readonly Regex _noteRegEx = new Regex(@"(?:US: )(?<note>.*)", RegexOptions.Compiled);

        protected override EmailParseResult Parse(MessageDetails message)
        {
            if (/*message.From != From ||*/ !_subjects.Contains(message.Subject))
            {
                return EmailParseResult.CreateError("Email was not recognized as transaction");
            }
            
            var tr = new TransactionDomain
            {
                Iban = GetIban(message),
                Amount = GetAmount(message),
                Note = GetNote(message),
                Source = TransactionSource.ImportedFromEmail,
                CreatedTime = DateTimeContext.Now
            };

            return EmailParseResult.CreateSuccess(tr);
        }

        private string GetIban(MessageDetails message)
        {
            foreach (var regex in _ibanRegEx)
            {
                var matches = regex.Matches(message.Body);

                if (matches.Any() && matches[0].Groups["iban"].Success)
                {
                    return matches[0].Groups["iban"].Value;
                }
            }

            return null;
        }

        private long GetAmount(MessageDetails message)
        {
            var matches = _amountRegEx.Matches(message.Body);

            if (matches.Any() && matches[0].Groups["amount"].Success)
            {
                var value = matches[0].Groups["amount"].Value;

                var decimalVal = decimal.Parse(value.Replace(" ", ""));

                var val = decimal.ToInt64(decimalVal);

                return val;
            }

            throw new Exception($"Transaction amount was not recognized, EmailId: '{message.UniqueId}', body: '{message.Body}'");
        }

        private string GetNote(MessageDetails message)
        {
            var matches = _noteRegEx.Matches(message.Body);

            if (matches.Any())
            {
                return matches[0]?.Groups["note"]?.Value;
            }

            return null;
        }
    }
}
