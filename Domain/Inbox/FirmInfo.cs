using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Inbox
{
    public class FirmsInfo 
    {
        public ValueObjectStrKey DefaultFirm { get; set; }

        public List<ValueObjectStrKey> AdditionalFirms { get; set; } = new List<ValueObjectStrKey>();
    }
}
