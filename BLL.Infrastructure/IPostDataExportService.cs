using System.Collections.Generic;
using Domain.Files;

namespace BLL.Infrastructure
{
    public interface IPostDataExportService
    {
        FileDownloadable ExportPost(IEnumerable<string> ids, string exportBy);
    }
}