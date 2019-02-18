using System;
using Common.Extensions;

namespace Common.Exceptions
{
    public class EntityNotFoundException : Exception
    {
        public EntityNotFoundException(Type type, long id)  : base($"Entity of type {type.GetDomainName()} with {id} was not found"){}
        public EntityNotFoundException(Type type, long? id) : base($"Entity of type {type.GetDomainName()} with {id} was not found"){}
        public EntityNotFoundException(Type type)           : base($"Entity of type {type.GetDomainName()} was not found") {} 
    }
}
