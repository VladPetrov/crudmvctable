using Domain.Client;
using WebApp.Model.Forms;

namespace WebApp.Areas.BackOffice.Views.ClientFirms
{
    public static class ClientFirmFormDescriptor
    {
        public static FormDescriptor Get(bool readOnly)
        {
            return FormBuilder<ClientFirmDomain>.CreateNew(readOnly, null)
                .AddItem(x => x.Name)
                .AddItem(x => x.Enabled)
                .Build();
        }
    }
}
