namespace Domain
{
    public interface IChildEntity<TKey>
    {
        TKey MusterEntityFk { get; set; }
    }
}
