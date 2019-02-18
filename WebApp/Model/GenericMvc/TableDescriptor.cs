using System.Collections.Generic;
using WebApp.Model.TableRenders;

namespace WebApp.Model.GenericMvc
{
    public class TableDescriptor
    {
        public static string DescriptorName => "TableDescriptor";
        
        public IRowStyler RowStyler { get; set; }

        public List<TableColumnDescriptor> Columns { get; set; } = new List<TableColumnDescriptor>();

        public TableQuickMenu QuickMenu { get; set; } = new TableQuickMenu();

        public bool RowsSelect { get; set;}

        public TableQuickMenuViewModel GetQuickMenuViewModel() => new TableQuickMenuViewModel(QuickMenu, RowsSelect);
    }
}
