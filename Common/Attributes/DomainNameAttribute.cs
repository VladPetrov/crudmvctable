using System;

namespace Common.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class DomainNameAttribute : Attribute
    {
        public string Name { get; }

        public DomainNameAttribute(string name)
        {
            if (string.IsNullOrEmpty(name) || string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentException("Domain name can't be null or white space");
            }

            Name = name;
        }
    }
}
