using JetBrains.Annotations;
using System.ComponentModel.DataAnnotations;


namespace DAL.Model
{
    [UsedImplicitly]
    // ReSharper disable once ClassWithVirtualMembersNeverInherited.Global
    public class File : EntityBase
    {
        public int FileId { get; set; } //todo what is this?

        [StringLength(255)]
        public string FileName { get; set; }

        [StringLength(100)]
        public string ContentType { get; set; }

        public virtual BinaryData BinaryData { get; set; }
    }
}
