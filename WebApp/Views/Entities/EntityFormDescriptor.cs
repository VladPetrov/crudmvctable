using Domain.Entity;
using WebApp.Model.Forms;

namespace WebApp.Views.Entities
{
    public static class EntityFormDescriptor
    {
        public static FormDescriptor Get(bool readOnly)
        {
            return FormBuilder<EntityDomain>.CreateNew(readOnly, null)
                .AddItem(x => x.Name)
                .AddItem(x => x.Acronym)
                .AddItem(x => x.Type)
                .AddItem(x => x.IsSupplier)
                .AddItem(x => x.Country)
                .AddItem(x => x.Address)
                .AddItem(x => x.ZipCode)
                .AddItem(x => x.City)
                .AddItem(x => x.IdNumber)
                .AddItem(x => x.TaxNumber)
                .AddItem(x => x.VatNumber)
                .Build();
        }
    }
}
