namespace Domain.Files
{
    public class BinaryDataDomain : DomainBase
    {
        public int BinaryDataId { get; set; }

        public byte[] Content { get; set; }
    }
}
