using System.Collections.Generic;
using System.Linq;
using Common.Extensions;
using JetBrains.Annotations;

namespace Common.Table
{
    public enum FilterOperator
    {
        Equal = 0,
        NotEqual = 1,
        StartsWith = 2,
        Contains = 3,
        DoesNotContain = 4,
        EndsWith = 5,
        GreaterThanOrEqual = 6,
        GreaterThan = 7,
        LessThanOrEqual = 8,
        LessThan = 9
    }

    public enum FilterType
    {
        String = 1,
        Number = 2,
        Currency = 3,
        Boolean = 4,
        Enum = 5,
        Date = 6
    }

    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class Filter
    {
        public string Group;
        
        public bool Encrypted { get; set; }
        
        public string FieldId { get; set; }
        
        public FilterType Type { get; set; }
        
        public object Value { get; set; }
        
        public FilterOperator Operator { get; set; }
        
        public List<string> Path => FieldId.Split('.').Select(x => x.ToPascalCase()).ToList();
    }
}