using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class TransactionFiles : EntityBase
    {
        [ForeignKey(nameof(Transaction))]
        public long TransactionId { get; set; }

        public virtual Transaction Transaction { get; set; }

        [ForeignKey(nameof(FilePreview))]
        public long? FilePreviewId { get; set; }

        public virtual File FilePreview { get; set; }

        [ForeignKey(nameof(File))]
        public long FileId { get; set; }

        public virtual File File { get; set; }
    }
}
