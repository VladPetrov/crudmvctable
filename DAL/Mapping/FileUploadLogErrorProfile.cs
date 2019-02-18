using AutoMapper;
using DAL.Model;
using Domain.FileUploadLogger;

namespace DAL.Mapping
{
    public class FileUploadLogErrorProfile : Profile
    {
        public FileUploadLogErrorProfile()
        {
            CreateMap<FileUploadLog, UploadFileLogDetails>();

            CreateMap<FileUploadLogError, FileUploadLogErrorDetails>();
        }
    }
}
