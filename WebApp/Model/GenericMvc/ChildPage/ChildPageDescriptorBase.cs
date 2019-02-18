using System;
using Microsoft.AspNetCore.Http;
using WebApp.Extensions;

namespace WebApp.Model.GenericMvc.ChildPage
{
    public abstract class ChildPageDescriptorBase
    {
        public string ChildPageContainerId => _childPageContainerId ?? (_childPageContainerId = Guid.NewGuid().ToString());

        public long MasterEntityFk { get; private set; }

        public bool IsReadonly { get; private set; }

        protected string FullControllerName { get; }

        protected string _childPageContainerId;

        public ChildPageDescriptorBase(long masterEntityFk, string fullControllerName, bool isReadonly)
        {
            MasterEntityFk = masterEntityFk;
            IsReadonly = isReadonly;
            FullControllerName = fullControllerName;
        }

        public string ControllerName => FullControllerName.ToControllerName();

        public abstract void SaveChildPageMusterFilterToSession(ISession session);
    }
}