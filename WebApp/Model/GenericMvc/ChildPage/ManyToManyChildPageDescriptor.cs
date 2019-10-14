using Microsoft.AspNetCore.Http;
using WebApp.Extensions;

namespace WebApp.Model.GenericMvc.ChildPage
{
    public class ManyToManyChildPageDescriptor : ChildPageDescriptorBase
    {
        private ManyToManyChildPageDescriptor(object masterEntityFk, string fullControllerName, bool isReadonly) 
            : base(masterEntityFk, fullControllerName, isReadonly)
        {}
        
        public override void SaveChildPageMusterFilterToSession(ISession session)
        {
            session.Set(GetSessionKey(), MasterEntityFk);
        }
        
        public static ManyToManyChildPageDescriptor Create(string controllerName, object musterEntityId, bool isReadonly = false)
        {
            return new ManyToManyChildPageDescriptor(musterEntityId, controllerName, isReadonly);
        }

        protected string GetSessionKey() => FullControllerName.ToSessionKey(SessionKeys.ChildPageManyToManyLeftEntityFk);
    }
}