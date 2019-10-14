using BLL.Infrastructure;
using Common;
using Common.Table;
using Domain.Files;
using Domain.Transaction;
using Microsoft.AspNetCore.Mvc;
using WebApp.Model.GenericMvc;
using WebApp.Model.Transactions;

namespace WebApp.Controllers
{
    [SetAvailableTableActions(TableActions.Add, TableActions.Edit)]
    public class TransactionsController : MasterPageCrudController<TransactionDisplay, TransactionDomain, long>
    {
        protected override string Title => "Transactions";

        protected override int ItemsPerPage => 100;

        private IFileService FileService { get; }

        private IEndBalanceService EndBalanceService { get; }
        private ITransactionService TransactionService { get; }

        public TransactionsController(ITransactionService service, IFileService fileService, IEndBalanceService endBalanceService) : base(service)
        {
            TransactionService = service;
            FileService = fileService;
            EndBalanceService = endBalanceService;
        }

        [HttpPost]
        public IActionResult AddFile(TransactionUploadFilesViewModel uploadFilesViewModel)
        {
            foreach (var file in uploadFilesViewModel.Files)
            {
                if (Pdf.IsPdf(file.FileName))
                {
                    var fileDomain = new FileDomain
                    {
                        FileName = file.FileName,
                        ContentType = file.ContentType,
                    };

                    FileService.UpsertTransactionFile(uploadFilesViewModel.TransactionId, fileDomain, file.OpenReadStream());
                }
                else
                {
                    return BadRequest("Invalid file type.");
                }
            }

            return Ok();
        }

        public IActionResult GetFilePreview(long id)
        {
            var filePreview = FileService.GetFilePreviewByFileId(id);

            if (filePreview != null)
            {
                var file = FileService.GetById(filePreview.Id);
                var binary = FileService.GetBinary(filePreview.Id);

                return File(binary.Content, file.ContentType, file.FileName);
            }
            else
            {
                return BadRequest("File not found.");
            }
        }

        public IActionResult GetFiles(long id)
        {
            return View("_FilesList", new TransactionFilesViewModel(id));
        }

        public IActionResult ExportToCsv()
        {
            var tableRequest = GetTableRequest();

            var listRequest = new ListRequest(tableRequest.Filters, tableRequest.Orders, 0, 0, true);

            FileDownloadable file = ((ITransactionService)Service).ExportTransactionsToCsv(listRequest);

            return File(file.Content, file.ContentType, file.Name);
        }

        public IActionResult CalculateEndBalance()
        {
            return PartialView("_EndBalancePanel", EndBalanceService.Calculate(GetTableRequest()?.Filters));
        }
        
        [HttpPost]
        public IActionResult EditNote([FromBody] TransactionEditNoteRequest request)
        {
            TransactionService.EditNote(request.TransactionId, request.Note);

            return Ok(true);
        }

        [HttpPost]
        public IActionResult EditProjectAndCategory([FromBody] EditProjectAndCategoryRequest request)
        {
            TransactionService.EditCategoryAndProject(request.TransactionIds, request.ProjectId, request.CategoryId);

            return Ok(true);
        }
    }
}