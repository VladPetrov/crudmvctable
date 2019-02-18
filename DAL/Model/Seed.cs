using System.ComponentModel.DataAnnotations;

namespace DAL.Model
{
    public class Seed : EntityBase
    {
        [Required]
        public string Name { get; set; }
    }
}
