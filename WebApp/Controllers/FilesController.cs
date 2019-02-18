using BLL.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApp.Extensions;

namespace WebApp.Controllers
{
    [Authorize]
    public class FilesController : ControllerBase
    {
        public static string CreateFileLink(long fileId) => $"{nameof(FilesController).ToControllerName()}/{nameof(File)}/{fileId}";

        private IFileService Service { get; }
        
        public FilesController(IFileService service)
        {
            Service = service;
        }

        public IActionResult File(long id)
        {
            var file = Service.GetById(id);
            var binary = Service.GetBinary(id);

            return File(binary.Content, file.ContentType, file.FileName);
        }

        [HttpDelete]
        public IActionResult DeleteFile(long id)
        {
            Service.Delete(id);
            return Ok();
        }
    }
}