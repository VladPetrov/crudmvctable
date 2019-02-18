using Domain.Project;
using WebApp.Model.Forms;

namespace WebApp.Views.Projects
{
    public static class ProjectFormDescriptor
    {
        public static FormDescriptor Get(bool isReadonly)
        {
            return FormBuilder<ProjectDomain>.CreateNew(isReadonly)
                .AddItem(x => x.Name)
                .AddItem(x => x.Acronym)
                .AddItem(x => x.Budget)
                .AddItem(x => x.StartDate)
                .AddItem(x => x.EndDate)
                .Build();
        }
    }
}
