using JetBrains.Annotations;

namespace Domain.DeleteResult
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class ExternalReference
    {
        public string Name { get; set; }

        public int Count { get; set; }
    }
}
