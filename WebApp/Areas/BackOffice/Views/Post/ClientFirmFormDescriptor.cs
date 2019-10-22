using DAL.Model;
using Domain;
using Domain.Post;
using WebApp.Model.Forms;
using WebApp.Model.TableRenders.Renders;

namespace WebApp.Areas.BackOffice.Views.Post
{
    public static class PostFormDescriptor
    {
        public static FormDescriptor Get(bool readOnly)
        {
            return FormBuilder<PostDomain>.CreateNew(readOnly, null)
                .AddItem(x => x.Sender)
                .AddItem(x => x.Recipient, new FormItemOptions{ ColumnRenderer = new ValueObjectRenderer<ClientFirm, ValueObjectStrKey, string>() })
                .AddItem(x => x.DeliveredDate)
                .AddItem(x => x.Type)
                .AddItem(x => x.Status)
                .AddItem(x => x.Note)
                .Build();
        }
    }
}
