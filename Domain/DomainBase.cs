using System;
using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Newtonsoft.Json;

namespace Domain
{
    public interface IDomainBase<TKey>
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

        private string _guid;

        [ScaffoldColumn(false)]
        public string Guid
        {
            set => _guid = value;

            get => _guid ?? (_guid = System.Guid.NewGuid().ToString());
        }

        [ScaffoldColumn(false)]
        public byte[] RowVersion { get; set; }

        private ChangeType _changeType;

        [ScaffoldColumn(false)]
        [IgnoreMap]
        public ChangeType ChangeType
        {
            get => _changeType;

            set
            {
                if (IsNew && value != ChangeType.Added)
                {
                    throw new ArgumentException($"Not saved entity can't have ChangeType {value}");
                }
                
                _changeType = value;
            }
        }

        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
            {
                return false;
            }

            if(obj is DomainBase domain)
            {
                return string.Equals(domain.Guid, Guid, StringComparison.InvariantCulture);
            }

            return false;
        }

        public override int GetHashCode()
        {
            return Guid.GetHashCode();
        }
    }
}