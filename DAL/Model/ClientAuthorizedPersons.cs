using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class ClientAuthorizedPersons : EntityBaseWithStrKey
    {
        [Key]
        [ForeignKey(nameof(Profile))]
        public new string Id { get; set; }
        
        public string Person1 { get; set; }

        public string Person2 { get; set; }

        public string Person3 { get; set; }

        public virtual ClientProfile Profile { get; set; }
    }
}
