using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using JetBrains.Annotations;

namespace Domain.ManyToManyRelation
{
    [UsedImplicitly]
    public class ManyToManySaveViewModel
    {
        [Required]
        public ManyToManySaveAction Action { get; set; }

        [Required]
        public long Id { get; set; }
    }

    public class ManyToManyRelationRequest
    {
        public List<ManyToManySaveViewModel> Items { get; set; } = new List<ManyToManySaveViewModel>();

        public long LeftEntityId { get; set; }
    }
}
