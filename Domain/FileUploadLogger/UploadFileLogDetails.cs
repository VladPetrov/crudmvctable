using System;
using System.Collections.Generic;

namespace Domain.FileUploadLogger
{
    public class UploadFileLogDetails : DomainBase
    {
        public string File { get; set; }
        
        public DateTime? StarTime { get; set; }

        public DateTime? EndDateTime { get; set; }

        public FileUploadStatus Status { get; set; }

        public List<FileUploadLogErrorDetails> Errors { get; set; } = new List<FileUploadLogErrorDetails>();
    }
}
