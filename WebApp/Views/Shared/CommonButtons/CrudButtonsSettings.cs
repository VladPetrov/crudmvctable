using Domain;
using WebApp.Controllers;
using WebApp.Model.GenericMvc;

namespace WebApp.Views.Shared.CommonButtons
{
    public static class CrudButtonsSettings
    {
        public const string BackToListLabel = "Back to List";
        public const string BackToListUrl = nameof(BasicCrudController<DomainBase, DomainBase, long>.IndexPage);
        public static string BackToListStyle => GetStyle(MetronicColor.primary);

        public const string EditLabel = "Edit";
        public const  string EditUrl = nameof(BasicCrudController<DomainBase, DomainBase, long>.Edit);
        public static string EditStyle => GetStyle(MetronicColor.warning);

        public const string SaveLabel = "Save";
        public const string SaveUrl = "";
        public static string SaveStyle => GetStyle(MetronicColor.success);

        public const string DeleteLabel = "Delete";
        public const string DeleteUrl = nameof(BasicCrudController<DomainBase, DomainBase, long>.Delete);
        public static string DeleteStyle => GetStyle(MetronicColor.danger);

        public const string CreateLabel = "Create";
        public const string CreateUrl = nameof(BasicCrudController<DomainBase, DomainBase, long>.Create);
        public static string CreateStyle => GetStyle(MetronicColor.success);

        public const string DetailsLabel = "Details";
        public const string DetailsUrl = nameof(BasicCrudController<DomainBase, DomainBase, long>.Details);
        public static string DetailsStyle => GetStyle(MetronicColor.success);


        private static string GetStyle(MetronicColor color) => $"btn btn-{color} btn-sm";
    }
}
