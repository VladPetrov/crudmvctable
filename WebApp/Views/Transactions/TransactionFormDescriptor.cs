using Common.StringConstants;
using DAL.Model;
using Domain;
using Domain.Transaction;
using WebApp.Model.Forms;
using WebApp.Model.TableRenders.Renders;

namespace WebApp.Views.Transactions
{
    public static class TransactionFormDescriptor
    {
        public static string RecipientEntityId => "recipientEntity";
        public static string ProjectId => "project";
        
        public static FormDescriptor Get(bool isReadonlyFields)
        {
            return FormBuilder<TransactionDomain>.CreateNew(false, null)
                .AddItem(x => x.Entity, new FormItemOptions
                {
                    @Readonly = isReadonlyFields,
                    ColumnRenderer = new ValueObjectRenderer<Entity, ValueObject, long>(Constants.DropdownDefaultOption, x => !x.IsSupplier),
                    HtmlAttributes = new { @id = RecipientEntityId }
                })
                .AddItem(x => x.RecipientEntity, new FormItemOptions
                {
                    ColumnRenderer = new ValueObjectRenderer<Entity, ValueObject, long>(Constants.DropdownDefaultOption)
                })
                .AddItem(x => x.CreatedTime, isReadonlyFields)
                .AddItem(x => x.Iban, isReadonlyFields)
                .AddItem(x => x.Amount, isReadonlyFields)
                .AddItem(x => x.Note)
                .AddItem(x => x.Type, isReadonlyFields)
                .AddItem(x => x.Source, isReadonlyFields)
                .AddItem(x => x.Project, new FormItemOptions
                {
                    ColumnRenderer = new ValueObjectRenderer<Project, ValueObject, long>(Constants.DropdownDefaultOption),
                    HtmlAttributes = new {@id = ProjectId}
                })
                .AddItem(x => x.Category, false, new ValueObjectRenderer<Category, ValueObject, long>(Constants.DropdownDefaultOption))
                .Build();
        }
    }
}
