using Domain.Category;
using WebApp.Model.Forms;

namespace WebApp.Views.SubCategories
{
    public static class CreateEditSubCategoriesFormDescriptor
    {
        public static FormDescriptor Get(bool @readonly)
        {
            return FormBuilder<SubCategoryDomain>.CreateNew(@readonly, null)
                .AddItem(x => x.Name)
                .Build();
        }
    }
}
