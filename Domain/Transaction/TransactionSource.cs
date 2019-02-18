namespace Domain.Transaction
{
    public enum TransactionSource
    {
        None = 0,
        ImportFromCsv = 1,
        ImportedFromEmail = 2,
        Planned = 3,
        Cache = 4
    }
}
