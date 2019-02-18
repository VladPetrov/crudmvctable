using Domain.Category;
using WebApp.Model.Forms;

namespace WebApp.Views.Categories
{
    public static class CategoryFormDescriptor
    {
        public static FormDescriptor Get(bool isReadonly)
        {
            return FormBuilder<CategoryDisplay>.CreateNew(isReadonly, null)
                .AddItem(x => x.Name)
                .Build();
        }
    }
}
