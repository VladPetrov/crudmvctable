using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using WebApp.Model.Forms;

namespace WebApp.Model.TableRenders.Renders
{
    public class ValueObjectViewModel
    {
        public static string Name => nameof(ValueObjectViewModel);

        public FormItemsDescriptor Descriptor  { get; set; }
        
        public string OptionalLabel { get; set; }

        public List<SelectListItem> Items { get; set; }
    }
}
