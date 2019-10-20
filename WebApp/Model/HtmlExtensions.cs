using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using Common.Extensions;
using Domain;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using WebApp.Model.Forms;
using WebApp.Model.GenericMvc;
using WebApp.Views.Shared.CommonButtons;


namespace WebApp.Model
{
    public static class HtmlExtensions
    {
        public static IHtmlContent GetPageHeader<TModel>(this IHtmlHelper<TModel> htmlHelper)
        {
            return new HtmlString($"{htmlHelper.ViewData[MvcViewConstants.Title]}");
        }

        public static Task<IHtmlContent> RenderPageHeaderAsync<TModel>(this IHtmlHelper<TModel> htmlHelper)
        {
            return htmlHelper.PartialAsync("_PageHeader");
        }

        public static Task<IHtmlContent> RenderStatusMessageAsync<TModel>(this IHtmlHelper<TModel> htmlHelper)
        {
            return htmlHelper.PartialAsync("_StatusMessage");
        }

        public static Task<IHtmlContent> RenderBackToListButtonAsync<TModel>(this IHtmlHelper<TModel> htmlHelper)
        {
            var model = new CrudButtonViewModel(CrudButtonsSettings.BackToListLabel, CrudButtonsSettings.BackToListUrl, CrudButtonsSettings.BackToListStyle);

            return htmlHelper.PartialAsync("_CrudButton", model); 
        }

        public static Task<IHtmlContent> RenderCrudButtonsAsync<TModel>(this IHtmlHelper<TModel> htmlHelper)
        {
            return htmlHelper.PartialAsync("_CrudButtons");
        }

        public static Task<IHtmlContent> RenderEditButtonAsync<TModel>(this IHtmlHelper<TModel> htmlHelper)
        {
            var pageContext = htmlHelper.GetPageContext();

            if (pageContext.TableCanEdit)
            {
                var model = htmlHelper.ViewData.Model as IDomain;

                Defensive.AssertNotNull(model);

                var viewModel = new CrudButtonViewModel(CrudButtonsSettings.EditLabel, CrudButtonsSettings.EditUrl, CrudButtonsSettings.EditStyle, new { id = model.GetId() });

                return htmlHelper.PartialAsync("_CrudButton", viewModel);
            }

            return Task.FromResult<IHtmlContent>(null);
        }

        public static Task<IHtmlContent> EditFromItemsAsync(this IHtmlHelper helper)
        {
            return helper.PartialAsync("_EditFormItems", helper.ViewData.Model);
        }

        public static Task<IHtmlContent> DisplayFromItemsAsync(this IHtmlHelper helper)
        {
            return helper.PartialAsync("_DisplayFormItems", helper.ViewData.Model);
        }
        
        public static Task<IHtmlContent> FormCrudAsync<TModel>(this IHtmlHelper<TModel> helper, FormDescriptor descriptor)
        {
            var dictionary = new ViewDataDictionary(helper.ViewData)
            {
                new KeyValuePair<string, object>(FormDescriptor.DescriptorName, descriptor)
            };

            return helper.PartialAsync("_Form", helper.ViewData.Model, dictionary);
        }

        public static Task<IHtmlContent> FormCrudTwoColumnsAsync<TModel>(this IHtmlHelper<TModel> helper, FormDescriptor descriptor)
        {
            var dictionary = new ViewDataDictionary(helper.ViewData)
            {
                new KeyValuePair<string, object>(FormDescriptor.DescriptorName, descriptor)
            };

            return helper.PartialAsync("_FormTwoColumns", helper.ViewData.Model, dictionary);
        }

        private static string FormItems => "FormItems_jweoijfiw";

        public static Task<IHtmlContent> FormItems_TwoColumnsAsync<TModel>(this IHtmlHelper<TModel> helper, IEnumerable<FormItemsDescriptor> items)
        {
            var dictionary = new ViewDataDictionary(helper.ViewData)
            {
                new KeyValuePair<string, object>(FormItems, items)
            };

            return helper.PartialAsync("_FormItemsTwoColumns", helper.ViewData.Model, dictionary);
        }

        public static Task<IHtmlContent> FormItemsAsync<TModel>(this IHtmlHelper<TModel> helper, IEnumerable<FormItemsDescriptor> items)
        {
            var dictionary = new ViewDataDictionary(helper.ViewData)
            {
                new KeyValuePair<string, object>(FormItems, items)
            };

            return helper.PartialAsync("_FormItmes", helper.ViewData.Model, dictionary);
        }

        public static IEnumerable<FormItemsDescriptor> GetFormItems<TModel>(this IHtmlHelper<TModel> helper)
        {
            var items = (IEnumerable<FormItemsDescriptor>)helper.ViewData[FormItems];

            Defensive.AssertNotNull(items);

            return items;
        }

        public static Task<IHtmlContent> TableAsync(this IHtmlHelper helper, TableViewModel model, TableDescriptor descriptor)
        {
            var dictionary =
                new ViewDataDictionary(helper.ViewData)
                {
                    new KeyValuePair<string, object>(TableDescriptor.DescriptorName, descriptor)
                };

            return helper.PartialAsync("_Table", model, dictionary);
        }
        
        public static IEnumerable<SelectListItem> GetSelectList(this IHtmlHelper helper, Type type)
        {
            var select = Enum.GetNames(type).Select(name =>
            {
                var memberInfo = type.GetMember(name).First();
                return new SelectListItem(memberInfo.GetDisplayName(), name);
            }).ToList();

            return select;
        }

        public static TableDescriptor GetTableDescriptor(this IHtmlHelper html)
        {
            var descriptor = html.ViewContext.ViewData[TableDescriptor.DescriptorName] as TableDescriptor;
            Defensive.AssertNotNull(descriptor, "GetTableDescriptor can't be null");
            return descriptor;
        }

        public static MvcPageContext GetPageContext(this IHtmlHelper html)
        {
            var context = html.ViewContext.ViewData[MvcPageContext.Name] as MvcPageContext;
            Defensive.AssertNotNull(context, "GetPageContext can't be null");
            return context;
        }

        public static FormDescriptor GetFormDescriptor(this IHtmlHelper html)
        {
            var descriptor = html.ViewContext.ViewData[FormDescriptor.DescriptorName] as FormDescriptor;
            Defensive.AssertNotNull(descriptor, "Forms Item Descriptor is not found");
            return descriptor;
        }

        public static string GetAction(this IHtmlHelper html)
        {
            return html.ViewContext.RouteData.Values["action"].ToString();
        }

        public static string GetController(this IHtmlHelper html)
        {
            return html.ViewContext.RouteData.Values["controller"].ToString();
        }

        public static ViewDataDictionary SaveToViewDictionary(this IHtmlHelper helper, FormItemsDescriptor descriptor)
        {
            return new ViewDataDictionary(helper.ViewData)
            {
                new KeyValuePair<string, object>(FormItemsDescriptor.DescriptorName, descriptor)
            };
        }

        public static FormItemsDescriptor GetFormItemDescriptor(this IHtmlHelper html)
        {
            var descriptor = html.ViewContext.ViewData[FormItemsDescriptor.DescriptorName] as FormItemsDescriptor;
            Defensive.AssertNotNull(descriptor, "Forms Item Descriptor is not found");
            return descriptor;
        }

        public static HtmlString RenderScriptTag(this IHtmlHelper helper, string script)
        {
            return script !=  null ? helper.RenderScriptTags(new[] {script}) : new HtmlString("");
        }

        public static HtmlString RenderScriptTags(this IHtmlHelper helper, IEnumerable<string> chunks)
        {
            var stb = new StringBuilder();

            foreach (var chunk in chunks)
            {
                stb.AppendLine($"<script src=\"{chunk}\"></script>");
            }

            return new HtmlString(stb.ToString());
        }
    }
}

