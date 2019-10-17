using Domain.Client;
using WebApp.Model.Forms;

namespace WebApp.Areas.BackOffice.Views.Clients
{
    public static class ClientFormDescriptor
    {
        public static FormDescriptor Get(bool readOnly)
        {
            return FormBuilder<ClientDomain>.CreateNew(readOnly, null)
                //.AddItem(x => x.ClientName)
                //.AddItem(x => x.PhoneNumber)
                //.AddItem(x => x.Email)
                .AddItem(x => x.Balance)
                //.AddItem(x => x.ContractStartDate)
                //.AddItem(x => x.ContractEndDate)
                .Build();
        }
    }
}
