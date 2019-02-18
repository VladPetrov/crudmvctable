using System.Collections.Generic;
using System.Linq;
using BLL;
using BLL.ImportTransactions;
using BLL.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApp.Model.Transactions;

namespace WebApp.Controllers
{
    [Authorize]
    public class ImportTransactionsController : Controller
    {
        private IImportTransactionsEmailService ImportTransactionsEmailImportService { get; }

        private ThreadManagerService Service { get; }

        private static long MaxSize => 1_048_576 * 1;

        [TempData]
        public string StatusMessage { get; set; }

        public ImportTransactionsController(IImportTransactionsEmailService importTransactionsEmailImportService, ThreadManagerService service)
        {
            ImportTransactionsEmailImportService = importTransactionsEmailImportService;
            Service = service;
        }

        public IActionResult Index()
        {
            ViewBag.UploadStatus = StatusMessage;

            return View();
        }

        [HttpGet]
        public IActionResult Upload()
        {
            return View(nameof(Index));
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Upload(ImportTransactionsCsvVm model)
        {
            if (!model.Files.Any())
            {
                StatusMessage = "No Files were selected";
                return RedirectToAction(nameof(Index));
            }

            if (model.Files.Count > 1)
            {
                StatusMessage = "Only one file is allowed ";
                return RedirectToAction(nameof(Index));
            }

            if (model.Files.Sum(f => f.Length) > MaxSize)
            {
                StatusMessage = "File exceeded the max size";
                return RedirectToAction(nameof(Index));
            }

            var result = Service.ImportFiles(model.Files.First(), model.EntityId);

            StatusMessage = result.Success ? "" : result.Message;

            return RedirectToAction(nameof(Index)); //todo redirect import logs page
        }

        [AllowAnonymous]
        public IActionResult ImportFromEmail()
        {
            ImportTransactionsEmailImportService.ImportTransactions();

            return Ok();
        }
    }
}