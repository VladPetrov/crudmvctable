using System.Collections.Generic;
using Common.Table;
using Domain;
using Microsoft.AspNetCore.Http;
using WebApp.Extensions;

namespace WebApp.Model.GenericMvc.ChildPage
{
    public class ChildPageDescriptor : ChildPageDescriptorBase
    {
        private ChildPageDescriptor(object masterEntityFk, string fullControllerName, bool isReadonly) 
            : base(masterEntityFk, fullControllerName, isReadonly)
        {
        }
        
        public override void SaveChildPageMusterFilterToSession(ISession session)
        {
            session.Set(GetSessionKey(), CreateTableRequest());
        }

        private ChildPageMusterFilter CreateTableRequest()
        {
            return new ChildPageMusterFilter
            {
                Filters = new List<Filter>
                {
                    new Filter
                    {
                        FieldId = nameof(IChildEntity<long>.MusterEntityFk),
                        Operator = FilterOperator.Equal,
                        Value = MasterEntityFk,
                        Type = FilterType.Number
                    }
                }
            };
        }
        
        public static ChildPageDescriptor Create(string controllerName, object musterEntityId, bool isReadonly = false)
        {
            return new ChildPageDescriptor(musterEntityId, controllerName, isReadonly);
        }

        protected string GetSessionKey() => FullControllerName.ToSessionKey(SessionKeys.ChildPageMusterFilter);
    }
}