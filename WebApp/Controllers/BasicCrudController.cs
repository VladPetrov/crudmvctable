using Common;
using Common.Exceptions;
using Common.Table;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApp.Extensions;
using WebApp.Filters;
using WebApp.Model;
using WebApp.Model.GenericMvc;

namespace WebApp.Controllers
{
    [TableActionsAccessCheckFilter]
    [PageContextFilter]
    public abstract class BasicCrudController<TCreate, TEdit, TKey> : ParentChildPageController
        where TCreate : new()
        where TEdit : new()
    {
        protected virtual int ItemsPerPage => 10;

        protected abstract string Title { get; }

        public BasicCrudController(bool isChildPage) : base(isChildPage)
        {
        }

        public abstract IActionResult Index(bool? isReadonly);

        public abstract IActionResult IndexPage();

        public abstract IActionResult ApplyFilters(TableRequest request);

        public abstract IActionResult Table(int? page);

        public abstract IActionResult Details(TKey id);

        public abstract IActionResult Create();

        public abstract IActionResult Create(TCreate domain);

        public abstract IActionResult Edit(TKey id);

        public abstract IActionResult Edit(TEdit domain);

        public abstract IActionResult Delete(TKey id);

        public abstract IActionResult DeleteConfirmed(TKey id);

        protected ChildPageMusterFilter GetChildPageMusterFilter()
        {
            var childPageRequest = GetFromSession<ChildPageMusterFilter>(SessionKeys.ChildPageMusterFilter);

            if (IsChildPage)
            {
                _ = childPageRequest == null
                    ? throw new ArgumentException(
                        "Child page must be provided with muster filter") //todo specific exception and global handling
                    : "";
            }

            return childPageRequest;
        }

        protected virtual void TryRenderStatusMessage()
        {
            var status = TempData.Get<IndexPageTempData>(nameof(IndexPageTempData))?.Status;

            if (status == null)
            {
                return;
            }

            string message;

            switch (status)
            {
                case ActionStatus.Created:
                    message = "Item was Added successfully";
                    break;
                case ActionStatus.Updated:
                    message = "Item was Updated successfully";
                    break;
                case ActionStatus.Deleted:
                    message = "Item was Deleted successfully";
                    break;
                default: throw new SwitchExpressionValueException(status);
            }

            ViewData.SetStatusMessage(message);
        }

        protected void SetMessageFor(ActionStatus status)
        {
            TempData.Set(nameof(IndexPageTempData), new IndexPageTempData(status));
        }

        protected TableRequest GetTableRequest()
        {
            var request = GetFromSession(SessionKeys.TableRequest, new TableRequest(ItemsPerPage));

            return IsChildPage ? GetChildPageMusterFilter().Merge(request) : request;
        }

        protected void SetMusterEntityId(TCreate model)
        {
            if (!IsChildPage)
            {
                return;
            }

            var childEntity = model as IChildEntity<TKey>;

            Defensive.AssertNotNull(childEntity, "Child entity must implement IChildEntity interface");

            var fk = GetChildPageMusterFilter().Filters.SingleOrDefault(x => x.FieldId == nameof(IChildEntity<long>.MusterEntityFk))?.Value;

            Defensive.AssertNotNull(fk, "Session for child page is expired");

            childEntity.MusterEntityFk = (TKey)fk;
        }

        protected virtual void AssembleTitleFor(TitleType type)
        {
            string title;

            switch (type)
            {
                case TitleType.Index:
                    title = Title;
                    break;
                case TitleType.Create:
                    title = $"{Title}. Add Item";
                    break;
                case TitleType.Edit:
                    title = $"{Title}. Edit Item";
                    break;
                case TitleType.Details:
                    title = $"{Title}. Item Details";
                    break;
                case TitleType.Delete:
                    title = $"{Title}. Delete Item";
                    break;
                default: throw new SwitchExpressionValueException(type);
            }

            ViewData.SetPageTitle(title);
        }

        #region GetView

        protected ViewResult GetView(TitleType type)
        {
            AssembleTitleFor(type);
            return View();
        }

        protected ViewResult GetView(TitleType type, OperationResult model)
        {
            return GetView(type, null, model);
        }

        protected ViewResult GetView(TitleType type, string viewName, OperationResult model)
        {
            AssembleTitleFor(type);
            return base.GetView(viewName, model);
        }

        protected ViewResult GetView<TData>(TitleType type, OperationResult<TData> model)
        {
            return GetView(type, null, model);
        }

        protected ViewResult GetView<TData>(TitleType type, string viewName, OperationResult<TData> model)
        {
            AssembleTitleFor(type);
            return base.GetView(viewName, model);
        }

        protected ViewResult GetView(TitleType type, object model)
        {
            return GetView(type, null, model);
        }

        protected ViewResult GetView(TitleType type, string viewName, object model)
        {
            AssembleTitleFor(type);
            return base.View(viewName, model);
        }

        protected IActionResult GetPartialView<TData>(TitleType type, string viewName, OperationResult<TData> model)
        {
            AssembleTitleFor(type);
            return base.GetPartialView(viewName, model);
        }

        protected IActionResult GetPartialView<TData>(TitleType type, OperationResult<TData> model)
        {
            return GetPartialView(type, null, model);
        }

        protected PartialViewResult GetPartialView(TitleType type, object model)
        {
            return GetPartialView(type, null, model);
        }

        protected PartialViewResult GetPartialView(TitleType type, string viewName, object model)
        {
            AssembleTitleFor(type);
            return PartialView(viewName, model);
        }

        #endregion

        protected void LogModelStateErrors()
        {
            if (!ModelState.IsValid)
            {
                var errors = new List<string>();

                foreach (var stateDictionary in ViewData.ModelState)
                {
                    errors.Add($"{stateDictionary.Key}:{string.Join(" ", stateDictionary.Value.Errors.Select(x => x.ErrorMessage))}");
                }

                Log.Logger().Warning("Model errors {errors}", string.Join("|", errors));
            }
        }
    }
}