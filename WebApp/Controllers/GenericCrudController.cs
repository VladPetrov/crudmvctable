﻿using BLL.Infrastructure;
using Common;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using WebApp.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    //[Authorize]
    public abstract class GenericCrudController<TDto, TDomain> : BasicCrudController<TDomain, TDomain>
        where TDto : DomainBase
        where TDomain : DomainBase, new ()
    {
        protected IGenericCrudService<TDto, TDomain> Service { get; }
    
        protected GenericCrudController(IGenericCrudService<TDto, TDomain> service, bool isChildPage) : base(isChildPage)
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
            return GetView(TitleType.Index, nameof(Index), new GenericMvcIndexViewModel(false, GetStatusMessage()));
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
        public override IActionResult Details(long id)
        {
            return GetPartialView(TitleType.Details, Service.GetById(id));
        }

        [HttpGet]
        public override IActionResult Create()
        {
            return GetPartialView(TitleType.Create, new TDomain());
        }

        [HttpPost]
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
                return RedirectToAction(nameof(IndexPage));
            }

            return GetPartialView(TitleType.Create, result);
        }

        [HttpGet]
        public override IActionResult Edit(long id)
        {
            return GetPartialView(TitleType.Edit, Service.GetById(id));
        }

        [HttpPost]
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
                return RedirectToAction(nameof(IndexPage));
            }

            return GetPartialView(TitleType.Edit, result);
        }

        [HttpGet]
        public override IActionResult Delete(long id)
        {
            return GetPartialView(TitleType.Delete, Service.GetById(id));
        }

        [HttpPost, ActionName(nameof(Delete))]
        public override IActionResult DeleteConfirmed(long id)
        {
            var result = Service.Delete(id);

            if (result.Success)
            {
                SetMessageFor(ActionStatus.Deleted);
                return RedirectToAction(nameof(IndexPage));
            }

            ModelState.AddModelError("", result.Message); //todo support DeleteResult

            return GetPartialView(TitleType.Delete, Service.GetById(id));
        }
     
        protected MvcTableResponse GetTableItemsPerPage(int? page)
        {
            if (!page.HasValue)
            {
                page = GetFromSession(SessionKeys.CurrentPage, 1);
            }

            Defensive.AssertTrue(page >= 1);

            SaveToSession(SessionKeys.CurrentPage, page);

            var request = GetTableRequest();

            return request.FromListResult(Service.List(request.ToListRequest(page.Value)), page.Value).ToMvcTableResponse();
        }
    }
}