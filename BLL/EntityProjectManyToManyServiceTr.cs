using BLL.Infrastructure;
using DAL.Model;

namespace BLL
{
    public class EntityProjectManyToManyServiceTr : ManyToManyServiceTr<DataBase, EntityProject, Entity, Project>, IEntityProjectManyToManyServiceTr
    {
        public EntityProjectManyToManyServiceTr(DataBase context) : base(context)
        {
        }
    }
}
