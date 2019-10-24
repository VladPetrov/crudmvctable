using BLL.Infrastructure;
using Common.Extensions;
using DAL.Infrastructure;
using Domain.Files;
using Domain.Post;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    public class PostDataExportService : IPostDataExportService
    {
        private IPostRepository Repository { get; }

        public PostDataExportService(IPostRepository repository)
        {
            Repository = repository;
        }
        
        public FileDownloadable ExportPost(IEnumerable<string> ids, string exportBy)
        {
            var (headers, dataRows) = ParseData(Repository.Export(ids));

            return Pdf.CreatePdf(headers, dataRows, "post export", $"post export {DateTime.Now.ToShortDateString()}", exportBy);
        }

        private (List<string> headers, List<List<string>> data) ParseData(IEnumerable<PostExportDto> data)
        {
            var headers = new List<string>();

            var type = typeof(PostExportDto);

            headers.Add(type.GetProperty(nameof(PostExportDto.Date))?.GetType().GetDisplayName());
            headers.Add(type.GetProperty(nameof(PostExportDto.Sender))?.GetType().GetDisplayName());
            headers.Add(type.GetProperty(nameof(PostExportDto.Recipient))?.GetType().GetDisplayName());
            headers.Add(type.GetProperty(nameof(PostExportDto.Type))?.GetType().GetDisplayName());

            var dataInRows = data.Select(item => new List<string> {item.Date, item.Sender, item.Recipient, item.Type}).ToList();

            return (headers, dataInRows);
        }
    }
}
