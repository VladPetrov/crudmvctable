using JetBrains.Annotations;

namespace Domain.DeleteResult
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class ExternalReference
    {
        public string DomainName { get; set; }

        public int Count { get; set; }
    }
}
