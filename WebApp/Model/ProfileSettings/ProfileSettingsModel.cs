namespace WebApp.Model.ProfileSettings
{
    public class ProfileSettingsModel
    {
        private ProfileSettingsModel()
        {
            
        }

        public bool BackOfficeArea { get; private set; }

        public string MusterEntityFk { get; private set; }

        public bool IsReadOnly { get; private set; }

        public bool HasMusterEntityFk => MusterEntityFk != null;


        public static ProfileSettingsModel CreateForBackOfficeArea(string musterEntityFk, bool isReadOnly = true)
        {
            return new ProfileSettingsModel
            {
                BackOfficeArea = true, 
                MusterEntityFk = musterEntityFk,
                IsReadOnly = isReadOnly
            };
        }

        public static ProfileSettingsModel CreateForClientArea(string musterEntityFk)
        {
            return new ProfileSettingsModel { BackOfficeArea = false, MusterEntityFk = musterEntityFk };
        }
    }
}
