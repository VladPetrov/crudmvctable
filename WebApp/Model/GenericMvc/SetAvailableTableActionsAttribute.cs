using System;

namespace WebApp.Model.GenericMvc
{
    [AttributeUsage(AttributeTargets.Class)]
    public class SetAvailableTableActionsAttribute : Attribute
    {
        public TableActions[] TableActions { get; }

        public SetAvailableTableActionsAttribute(params TableActions[] tableActions)
        {
            TableActions = tableActions;
        }
    }
}
