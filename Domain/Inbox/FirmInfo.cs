using System.Collections.Generic;

namespace Domain.Inbox
{
    public class FirmsInfo 
    {
        public ValueObjectStrKey DefaultFirm { get; set; }

        public List<ValueObjectStrKey> AdditionalFirms { get; set; } = new List<ValueObjectStrKey>();
    }
}
