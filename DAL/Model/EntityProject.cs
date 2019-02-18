using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class EntityProject : EntityBase, IManyToMany<Entity, Project>
    {
        public Entity LeftLink { get; set; }

        [ForeignKey(nameof(Entity))]
        public long LeftLinkId { get; set; }
        
        [ForeignKey(nameof(Project))]
        public long RightLinkId { get; set; }

        public Project RightLink { get; set; }
    }
}
