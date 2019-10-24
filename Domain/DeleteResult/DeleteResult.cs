using System;
using System.Collections.Generic;
using System.Linq;
using Common.Extensions;
using JetBrains.Annotations;

namespace Domain.DeleteResult
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class DeleteResult
    {
        public List<ExternalReference> References { get; } = new List<ExternalReference>();

        public bool Success => References.Count == 0;

        public DeleteResult OnDelete([NotNull] Action action)
        {
            if (Success)
            {
                action.Invoke();
            }
            return this;
        }

        public void Add(int count, Type type)
        {
            References.Add(new ExternalReference
            {
                Count = count,
                Name = type.GetDisplayName()
            });
        }

        public string GetErrorMessage()
        {
            return string.Join("/n", References.Select(r => $"Object is referenced by '{r.Name}' {r.Count} time/s"));
        }
    }
}
