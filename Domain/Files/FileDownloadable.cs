namespace Domain.Files
{
    public class FileDownloadable
    {
        public FileDownloadable(string name, string contentType, byte[] content)
        {
            Name = name;
            ContentType = contentType;
            Content = content;
        }

        public byte[] Content { get;}

        public string ContentType { get; }

        public string Name { get; }
    }
}
