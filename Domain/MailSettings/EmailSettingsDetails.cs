using System.ComponentModel.DataAnnotations;


namespace Domain.MailSettings
{
    public class EmailSettingsDetails : DomainBase
    {

        //[Display(ResourceType = typeof(MailServiceSettingVMs), Name = "MailServiceSettingsContainer_UserName_Name")]
        //[Required(ErrorMessageResourceType = typeof(Global), ErrorMessageResourceName = "Field_cant_be_empty")]
        //[DataType(DataType.EmailAddress, ErrorMessageResourceType = typeof(Global),ErrorMessageResourceName = "Email_Error_Message")]
        public string UserName { get; set; }

        //[Display(ResourceType = typeof(MailServiceSettingVMs), Name = "MailServiceSettingsContainer_Password_Name")]
        //[DataType(DataType.Password)]
        //[Required(ErrorMessageResourceType = typeof(Global), ErrorMessageResourceName = "Field_cant_be_empty")]
        public string Password { get; set; }

        //[Display(ResourceType = typeof(MailServiceSettingVMs), Name = "MailServiceSettingsContainer_Host_Name")]
        //[Required(ErrorMessageResourceType = typeof(Global), ErrorMessageResourceName = "Field_cant_be_empty")]
        public string Host { get; set; }

        //[Display(ResourceType = typeof(MailServiceSettingVMs), Name = "MailServiceSettingsContainer_Port_Name")]
        public int Port { get; set; }

        //[Display(ResourceType = typeof(MailServiceSettingVMs), Name = "MailServiceSettingsContainer_EnableSsl_Name")]
        public bool EnableSsl { get; set; }

        //[Display(ResourceType = typeof(MailServiceSettingVMs), Name = "MailServiceSettingsContainer_IsActive_Name")]
        public bool IsActive { get; set; }
    }   
}
