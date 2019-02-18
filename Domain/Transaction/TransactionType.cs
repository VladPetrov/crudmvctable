using System.ComponentModel.DataAnnotations;

namespace Domain.Transaction
{
    public enum TransactionType
    {
        CashDeposit = 1,

        CardTransactions = 2,

        CashlessPayment = 3,

        CashlessIncome = 4,

        Fee = 5,

        TransferWithinTheBank = 6,

        ForeignCurrencyPayment = 7,

        CashWithdrawal = 8,

        [Display(Name = "Fee Payment Card")]
        Feepaymentcard = 9
    }
}