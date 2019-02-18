using System.ComponentModel.DataAnnotations.Schema;
using Common;

namespace DAL.Model
{
    // ReSharper disable once ClassWithVirtualMembersNeverInherited.Global
    public class FileUploadLogError : EntityBase
    {
        public string Message { get; set; }

        [ForeignKey(nameof(Log))]
        public long LogId { get; set; }

        public virtual FileUploadLog Log { get; set; }

        public static FileUploadLogError Create(string message)
        {
            Defensive.AssertNotNull(message, "Error message must not be null");

            return new FileUploadLogError
            {
                Message = message
            };
        }
    }
}