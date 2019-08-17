using BLL.Infrastructure;
using Common;
using DAL.Model;
using Domain.ManyToManyRelation;
using Domain.ManyToManyService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.AspNetCore.Authorization;
using WebApp.Extensions;
using WebApp.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [Authorize]
    public abstract class GenericManyToManyLeftController<TContext, TManyToManyEntity, TLeftLink, TRightLink> : ParentChildPageController //todo reject ont ajax requests
        where TContext : DbContext
        where TLeftLink : EntityBase
        where TRightLink : EntityBase
        where TManyToManyEntity : EntityBase, IManyToMany<TLeftLink, TRightLink>, new()
    {
        protected IManyToManyServiceTr<TContext, TManyToManyEntity, TLeftLink, TRightLink> Service { get; }

        protected abstract string Title { get; }

        public GenericManyToManyLeftController(IManyToManyServiceTr<TContext, TManyToManyEntity, TLeftLink, TRightLink> service) : base(true)
        {
            Service = service;
        }

        public IActionResult Index(bool isReadonly)
        {
            SaveToSession(SessionKeys.ChildPageManyToManyIsReadonlyFlag, isReadonly);

            return PartialView("_ManyToManyRelatioIndexView", GetItems());
        }

        public IActionResult RenderTable()
        {
            return PartialView("_ManyToManyRelatioTable", GetItems());
        }

        [HttpPost]
        public IActionResult SaveManyToManyRelation([FromBody] ManyToManyRelationRequest request)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Model is not valid");
            }

            Service.SaveRightItems(request.LeftEntityId, request.Items);

            return RedirectToAction(nameof(RenderTable));
        }

        private ManyToManyRelationVm GetItems()
        {
            var leftEntityId = GetFromSession<long>(SessionKeys.ChildPageManyToManyLeftEntityFk);

            Defensive.AssertTrue(leftEntityId > 0, "Session is expired");

            if (GetFromSession(SessionKeys.ChildPageManyToManyIsReadonlyFlag, false))
            {
                ViewData.GetPageContext().SetTableIsReadonly();
            }
            
            ViewData[MvcViewConstants.Title] = Title;
            
            return new ManyToManyRelationVm(leftEntityId, Service.GetRightItems(leftEntityId));
        }
    }
}