using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Common;
using Domain.FileUploadLogger;

namespace DAL.Model
{
    // ReSharper disable once ClassWithVirtualMembersNeverInherited.Global
    public class FileUploadLog : EntityBase
    {
        [Required]
        public string File { get; set; }

        [Required]
        public DateTime StarTime { get; set; }

        public DateTime? EndDateTime { get; set; }

        public FileUploadStatus Status { get; set; }

        public virtual List<FileUploadLogError> Errors { get; set; } = new List<FileUploadLogError>();

        public static FileUploadLog CreateFor(string file)
        {
            return new FileUploadLog
            {
                File = file,
                StarTime = DateTimeContext.Now,
                Status = FileUploadStatus.InProcess
            };
        }
    }
}