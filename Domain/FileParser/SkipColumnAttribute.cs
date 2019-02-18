using System;

namespace Domain.FileParser
{
    [AttributeUsage(AttributeTargets.Property)]
    public class SkipColumnAttribute : Attribute
    {
    }
}
