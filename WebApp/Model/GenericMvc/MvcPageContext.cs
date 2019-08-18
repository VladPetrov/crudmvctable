using System.Collections.Generic;
using System.Linq;

namespace WebApp.Model.GenericMvc
{
    public class MvcPageContext
    {
        private List<TableActions> _actions = new List<TableActions>();

        public string ControllerName { get; set; }

        public bool IsChildPage { get; set; }

        private bool _isReadonly;

        public void SetTableActions(IEnumerable<TableActions> actions)
        {
            _actions = actions?.ToList();
        }

        public void SetTableIsReadonly()
        {
            _isReadonly = true;
        }
        
        public static string Name => "MvcPageContext";
        public string TableServiceName => ControllerName.ToTableServiceName();
        public string PageContainerId => ControllerName.ToPageContainerId();
        public string TableContainerId => ControllerName.ToTableContainerId();
        public string PageCollapseContainerId => ControllerName.ToPageCollapseContainerId();
        public string ManyToManyServiceName => ControllerName.ManyToManyServiceName();
        
        public bool TableCanEdit => IsActionEnabled(TableActions.Edit);
        public bool TableCanAdd => IsActionEnabled(TableActions.Add);
        public bool TableCanDelete => IsActionEnabled(TableActions.Delete);
        public bool TableCanDetails => IsActionEnabled(TableActions.Details);

        public bool IsActionEnabled(TableActions action)
        {
            if (action == TableActions.Details)
            {
                return _actions.Contains(action);
            }

            return !_isReadonly && _actions.Contains(action);
        }
    }
}
