using JetBrains.Annotations;
using WebApp.Model.TableRenders;

namespace WebApp.Model.Forms
{
    [UsedImplicitly]
    public class FormItemOptions
    {
        public IFormItemRenderer ColumnRenderer { get; set; }

        public object HtmlAttributes { get; set; }

        public bool @Readonly { get; set; }
    }
}
