using System.ComponentModel.DataAnnotations.Schema;
using JetBrains.Annotations;

namespace DAL.Model
{
    [UsedImplicitly]
    // ReSharper disable once ClassWithVirtualMembersNeverInherited.Global
    public class BinaryData : EntityBase
    {
        public int BinaryDataId { get; set; }

        public byte[] Content { get; set; }

        [ForeignKey(nameof(File))]
        public long FileId { get; set; }

        public virtual File File { get; set; }
    }
}
