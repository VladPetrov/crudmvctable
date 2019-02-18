using System.Collections.Generic;
using System.Linq;

namespace WebApp.Model.GenericMvc
{
    public class MvcPageContext
    {
        private List<TableActions> _actions = new List<TableActions>();

        public string ControllerName { get; set; }

        public bool IsChildPage { get; set; }

        public void SetTableActions(IEnumerable<TableActions> actions)
        {
            _actions = actions?.ToList();
        }

        public void SetTableIsReadonly()
        {
            _actions.Add(TableActions.Readonly);
        }
        
        public static string Name => "MvcPageContext";
        public string TableServiceName => ControllerName.ToTableServiceName();
        public string PageContainerId => ControllerName.ToPageContainerId();
        public string TableContainerId => ControllerName.ToTableContainerId();
        public string PageCollapseContainerId => ControllerName.ToPageCollapseContainerId();
        public string ManyToManyServiceName => ControllerName.ManyToManyServiceName();
        
        public bool TableCanEdit => CheckAction(TableActions.Edit);
        public bool TableCanAdd => CheckAction(TableActions.Add);
        public bool TableCanDetails => _actions.All(x => x == TableActions.Readonly) || _actions.Contains(TableActions.Details);
        public bool TableCanDelete => CheckAction(TableActions.Delete);

        private bool CheckAction(TableActions action)
        {
            return !_actions.Any() || !_actions.Contains(TableActions.Readonly) && _actions.Contains(action);
        }
    }
}
