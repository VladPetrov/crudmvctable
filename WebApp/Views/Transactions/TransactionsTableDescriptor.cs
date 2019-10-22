using Common.StringConstants;
using DAL.Model;
using Domain;
using Domain.Transaction;
using WebApp.Controllers;
using WebApp.Model.ColumnFilter;
using WebApp.Model.ColumnSort;
using WebApp.Model.GenericMvc;
using WebApp.Model.TableRenders.Renders;

namespace WebApp.Views.Transactions
{
    public static class TransactionsTableDescriptor
    {
        public static TableDescriptor Get()
        {
            return TableBuilder<TransactionDisplay>.CreateNew()
                .AddColumn(x => x.CreatedTime, new RowOptions
                {
                    SortRenderer = new NoColumnSortRenderer()
                })
                .AddColumn(x => x.Entity, new RowOptions
                {
                    FilterRenderer =
                        new ValueObjectColumnFilterRenderer<TransactionDisplay, Entity, ValueObject, long>(x => x.EntityId,
                            e => !e.IsSupplier)
                })
                .AddColumn(x => x.RecipientEntity, new RowOptions
                {
                    FilterRenderer =
                        new ValueObjectColumnFilterRenderer<TransactionDisplay, Entity, ValueObject, long>(x => x.RecipientEntityId)
                })
                .AddColumn(x => x.Amount, new RowOptions{ColumnClass = Constants.CurrencyClass })
                .AddColumn(x => x.Note, new RowOptions
                {
                    ColumnRenderer = new NoteRender()
                })
                .AddColumn(x => x.Category, new RowOptions
                {
                    FilterRenderer =
                        new ValueObjectColumnFilterRenderer<TransactionDisplay, Category, ValueObject, long>(x => x.CategoryId)
                })
                .AddColumn(x => x.Project, new RowOptions
                {
                    FilterRenderer = new ValueObjectColumnFilterRenderer<TransactionDisplay, Project, ValueObject, long>(x => x.ProjectId)
                })
                .AddColumn(x => x.Type)
                .AddColumn(x => x.Source)
                .AddColumn(x => x.Files, new RowOptions
                {
                    ColumnRenderer = new FilesListRenderer(),
                    SortRenderer = new NoColumnSortRenderer(),
                    FilterRenderer = new HasFilesFilterRenderer()
                })
                .QuickMenuAddButton(
                    new UrlDescriptor(nameof(TransactionsController), nameof(TransactionsController.ExportToCsv)),
                    "Export to CSV", 
                    MetronicColor.primary)
                .QuickMenuAddButton(
                    null,
                    "Edit Project and Category", 
                    MetronicColor.primary,
                    "editProjectAndCategory")
                .QuickMenuAddLink(
                    new UrlDescriptor(nameof(ImportTransactionsController), nameof(ImportTransactionsController.Index)),
                    "Import Transactions", 
                    "flaticon-cart")
                .AddRowsSelect()
                .Build();
        }
    }
}