namespace Domain
{
    public class ValueObject : IDomain
    {
        public long Id { get; set; }
        
        public string Name { get; set; }

        public object GetId() => Id;
    }
}