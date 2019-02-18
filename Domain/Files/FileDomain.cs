using System.ComponentModel.DataAnnotations;

namespace Domain.Files
{
    public class FileDomain : DomainBase
    {
        public int FileId { get; set; }

        [StringLength(255)]
        public string FileName { get; set; }

        [StringLength(100)]
        public string ContentType { get; set; }
    }
}
