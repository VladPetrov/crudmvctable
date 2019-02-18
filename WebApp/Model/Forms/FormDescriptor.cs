using System.Collections.Generic;
using System.Linq;

namespace WebApp.Model.Forms
{
    public class FormDescriptor
    {
        public static string DescriptorName => "FormDescriptor_jajky";

        public bool ReadOnly { get; }

        public string Name { get; }

        public string Action { get; }

        private readonly List<FormItemsDescriptor> _items = new List<FormItemsDescriptor>();
        
        public FormDescriptor(bool readOnly, string action, string name)
        {
            Name = name;
            ReadOnly = readOnly;
            Action = action;
        }

        public IReadOnlyList<FormItemsDescriptor> Items => _items;

        public void AddItem(FormItemsDescriptor item)
        {
            _items.Add(item);
        }
    }
}
