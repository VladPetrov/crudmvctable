using System.Collections.Generic;
using System.Linq;
using MailKit.Search;

namespace WebApp.Model.GenericMvc
{
    public class TableQuickMenu
    {
        public List<QuickMenuLink> Links { get; set; } = new List<QuickMenuLink>();
        public List<QuickMenuButton> Buttons { get; set; } = new List<QuickMenuButton>();

        public void AddButton(UrlDescriptor url, string text, MetronicColor color = MetronicColor.success, string @class = null)
        {
            Buttons.Add(new QuickMenuButton(url, text, color, @class));
        }

        public void AddLink(UrlDescriptor url, string text, string icon = null)
        {
            Links.Add(new QuickMenuLink(url, text, icon));
        }
    }

    public class QuickMenuLink
    {
        public QuickMenuLink(UrlDescriptor url, string text, string icon = null)
        {
            Url = url;
            Text = text;
            Icon = icon;
        }

        public UrlDescriptor Url { get; }
        public string Text { get; }
        public string Icon { get; }
    }

    public class QuickMenuButton
    {
        private readonly MetronicColor _color;

        public QuickMenuButton(UrlDescriptor url, string text, MetronicColor color = MetronicColor.success, string @class = null)
        {
            Url = url;
            Text = text;
            Class = @class;
            _color = color;
        }

        public UrlDescriptor Url { get; }

        public string Text { get; }

        public string Class { get; }
        
        public string Color => _color.ToString();
    }

    public class TableQuickMenuViewModel 
    {
        public bool RowsSelect { get; }
        public List<QuickMenuLink> Links { get; }
        public List<QuickMenuButton> Buttons { get; }

        public TableQuickMenuViewModel(TableQuickMenu menu, bool rowsSelect)
        {
            RowsSelect = rowsSelect;

            Links = menu.Links;
            Buttons = menu.Buttons;
        }

        public bool HasContentToRender => Links.Any() || Buttons.Any() || RowsSelect;
    }
}
