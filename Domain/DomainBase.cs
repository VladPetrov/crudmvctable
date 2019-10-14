using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Domain
{
    public interface IDomainBase
    {
        object GetId();
    }

    public interface IDomainBase<TKey> : IDomainBase
    {
        TKey Id { get; set; }
        bool IsNew { get; }
        DateTime CreatedDate { get; set; }
    }

    public class DomainBase //: IChangeType
        : IDomainBase<long>
    {
        [ScaffoldColumn(false)]
        public long Id { get; set; }

        [ScaffoldColumn(false)]
        [JsonIgnore]
        public bool IsNew => Id == 0;

        [ScaffoldColumn(false)]
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        
        [ScaffoldColumn(false)]
        public byte[] RowVersion { get; set; }
        
        public object GetId() => Id;
    }
}