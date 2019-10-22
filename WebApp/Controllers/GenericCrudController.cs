using BLL.Infrastructure;
using Common;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using WebApp.Extensions;
using WebApp.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [Authorize]
    public abstract class GenericCrudController<TDisplay, TDomain, TKey> : BasicCrudController<TDomain, TDomain, TKey>
        where TDisplay : IDomain<TKey>
        where TDomain : IDomain<TKey>, new ()
    {
        protected IGenericCrudService<TDisplay, TDomain, TKey> Service { get; }
    
        protected GenericCrudController(IGenericCrudService<TDisplay, TDomain, TKey> service, bool isChildPage) : base(isChildPage)
        {
            Service = service;
        }

        [HttpGet]
        public override IActionResult Index(bool? isReadonly)
        {
            RemoveFromSession(SessionKeys.TableRequest);
            RemoveFromSession(SessionKeys.CurrentPage);

            GetChildPageMusterFilter();

            SaveToSession(SessionKeys.TableIsReadonly, isReadonly);
           
            return GetView(TitleType.Index, new GenericMvcIndexViewModel(!IsChildPage));
        }

        [HttpGet]
        public override IActionResult IndexPage()
        {
            TryRenderStatusMessage();

            return GetView(TitleType.Index, nameof(Index), new GenericMvcIndexViewModel(false));
        }
        
        [HttpPost]
        public override IActionResult ApplyFilters([FromBody] TableRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest($"Model is not Valid: {string.Join(" ;", ModelState.Values.SelectMany(x => x.Errors.Select(y => y.ErrorMessage)))}");
            }
            SaveToSession(SessionKeys.TableRequest, request);

            return RedirectToAction(nameof(Table), new { page = 1});
        }

        [HttpGet]
        public override IActionResult Table(int? page)
        {
            return PartialView("_TableConfig", GetTableItemsPerPage(page).ToTableViewModel());
        }

        [HttpGet]
        public override IActionResult Details(TKey id)
        {
            TryRenderStatusMessage();

            return GetPartialView(TitleType.Details, Service.GetById(id));
        }

        [HttpGet]
        public override IActionResult Create()
        {
            return GetPartialView(TitleType.Create, new TDomain());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public override IActionResult Create(TDomain domain)
        {
            if (!ModelState.IsValid)
            {
                LogModelStateErrors();
                return GetPartialView(TitleType.Create, domain);
            }

            SetMusterEntityId(domain);

            var result = Service.Upsert(domain);

            if (result.Success)
            {
                SetMessageFor(ActionStatus.Created);

                Defensive.AssertNotNull(result.Data);

                return RedirectAfterCreate(result.Data.Id);
            }

            result = UpsertResult<TDomain>.Error(result.Message, domain); //return model back with errors
            
            return GetPartialView(TitleType.Create, result);
        }

        [HttpGet]
        public override IActionResult Edit(TKey id)
        {
            TryRenderStatusMessage();

            return GetPartialView(TitleType.Edit, Service.GetById(id));
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public override IActionResult Edit(TDomain domain)
        {
            if (!ModelState.IsValid)
            {
                LogModelStateErrors();
                return GetPartialView(TitleType.Edit, domain);
            }
            
            SetMusterEntityId(domain);

            var result = Service.Upsert(domain);

            if (result.Success)
            {
                SetMessageFor(ActionStatus.Updated);

                if (IsChildPage)
                {
                    return RedirectToAction(nameof(IndexPage)); //spike for modal service
                }
            }
            else
            {
                result = UpsertResult<TDomain>.Error(result.Message, domain); //return model back with errors 
            }

            TryRenderStatusMessage();

            return GetPartialView(TitleType.Edit, result);
        }

        [HttpGet]
        public override IActionResult Delete(TKey id)
        {
            return GetPartialView(TitleType.Delete, Service.GetById(id));
        }

        [ValidateAntiForgeryToken]
        [HttpPost, ActionName(nameof(Delete))]
        public override IActionResult DeleteConfirmed(TKey id)
        {
            var result = Service.Delete(id);

            if (result.Success)
            {
                SetMessageFor(ActionStatus.Deleted);
                return RedirectToAction(nameof(IndexPage));
            }

            ModelState.AddModelError("", result.Message); 

            return GetPartialView(TitleType.Delete, Service.GetById(id));
        }
     
        protected MvcTableResponse<TDisplay,TKey> GetTableItemsPerPage(int? page)
        {
            if (!page.HasValue)
            {
                page = GetFromSession(SessionKeys.CurrentPage, 1);
            }

            Defensive.AssertTrue(page >= 1);

            SaveToSession(SessionKeys.CurrentPage, page);

            var request = GetTableRequest();

            var listResult = request.FromListResult<TDisplay, TKey>(Service.List(request.ToListRequest(page.Value)), page.Value);

            return listResult.ToMvcTableResponse();
        }

        protected virtual IActionResult RedirectAfterCreate(TKey id)
        {
            if (IsChildPage)
            {
                return RedirectToAction(nameof(IndexPage)); //spike for modal service
            }
            
            var pageContext = ViewData.GetPageContext();

            if (pageContext.TableCanEdit)
            {
                return RedirectToAction(nameof(Edit), new {id = id});
            }

            if (pageContext.TableCanDetails)
            {
                return RedirectToAction(nameof(Details), new { id = id });
            }

            return RedirectToAction(nameof(IndexPage));
        }
    }
}