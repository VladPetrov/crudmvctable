using System;
using Domain.Post;
using WebApp.Model.Forms;

namespace WebApp.Areas.BackOffice.Views.Post
{
    public static class PostFormDescriptor
    {
        public static FormDescriptor Get(bool readOnly)
        {
            throw new NotImplementedException();
            //return FormBuilder<PostDomain>.CreateNew(readOnly, null)
            //    .AddItem(x => x.DeliveredDate)
            //    .AddItem(x => x.Sender)
            //    .AddItem(x => x.Recipient)
            //    .AddItem(x => x.Type)
            //    .AddItem(x => x.Status)
            //    .AddItem(x => x.RegisteredBy)
            //    .Build();
        }
    }
}
