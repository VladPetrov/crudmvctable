﻿using System;
using Common.Extensions;

namespace Common.Exceptions
{
    public class EntityNotFoundException : Exception
    {
        public EntityNotFoundException(string message) : base(message) {} 
    }
}
