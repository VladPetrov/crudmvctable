using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Domain
{
    public class DomainBase : IDomain<long>
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

    public class DomainBaseWithStrKey : IDomain<string>
    {
        public string Id { get; set; }

        public bool IsNew => Id == null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        public byte[] RowVersion { get; set; }

        public object GetId() => Id;
    }
}