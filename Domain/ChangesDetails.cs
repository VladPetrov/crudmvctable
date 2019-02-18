namespace Domain
{
    public class ChangesDetails
    {
        public object Previous { get; set; }

        public object Current { get; set; }

        public string Property { get; set; }

        public bool IsObject { get; set; }
        
        public bool IsArray { get; set; }
    }
}
