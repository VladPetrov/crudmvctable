using System;
using Common.Table;
using Microsoft.AspNetCore.Http;
using WebApp.Extensions;

namespace WebApp.Model.GenericMvc.ChildPage
{
    public abstract class ChildPageDescriptorBase
    {
        public string ChildPageContainerId => _childPageContainerId ?? (_childPageContainerId = Guid.NewGuid().ToString());

        public object MasterEntityFk { get; private set; }

        public bool IsReadonly { get; private set; }

        protected string FullControllerName { get; }

        protected string _childPageContainerId;

        public ChildPageDescriptorBase(object masterEntityFk, string fullControllerName, bool isReadonly)
        {
            MasterEntityFk = masterEntityFk != null? masterEntityFk : throw new ArgumentException(nameof(masterEntityFk));
            IsReadonly = isReadonly;
            FullControllerName = fullControllerName;
        }

        public string ControllerName => FullControllerName.ToControllerName();

        protected FilterType GetFilterType()
        {
            if (MasterEntityFk is long || MasterEntityFk is long? || MasterEntityFk is int || MasterEntityFk is int?)
            {
                return FilterType.Number;
            }

            if (MasterEntityFk is string)
            {
                return FilterType.String;
            }

            throw new NotFiniteNumberException($"Found not implemented filter for the type {MasterEntityFk.GetType().FullName}");
        }

        public abstract void SaveChildPageMusterFilterToSession(ISession session);
    }
}