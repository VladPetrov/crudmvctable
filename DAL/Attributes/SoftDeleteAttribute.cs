using System;

namespace DAL.Attributes
{
    /// <summary>
    /// Configure entity SafeDelete policy
    /// </summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Class)]
    public class SoftDeleteAttribute:Attribute
    {
        public bool Enabled { get; }

        public SoftDeleteAttribute(bool enabled)
        {
            Enabled = enabled;
        }
    }
}