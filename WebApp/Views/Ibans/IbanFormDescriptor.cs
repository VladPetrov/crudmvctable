using Domain.Iban;
using WebApp.Model.Forms;
using WebApp.Views.Shared.CommonButtons;

namespace WebApp.Views.Ibans
{
    public static class IbanFormDescriptor
    {
        public static FormDescriptor Get(bool isReadonly)
        {
            return FormBuilder<IbanDomain>.CreateNew(isReadonly)
                .AddItem(x => x.IbanStr)
                .AddItem(x => x.Currency)
                .AddItem(x => x.Bank)
                .AddItem(x => x.Swift)
                .Build();
        }
    }
}
