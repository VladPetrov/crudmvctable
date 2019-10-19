using System;
using System.Collections.Generic;
using System.Text;
using Domain;
using Domain.ProfileSettings;

namespace BLL.Infrastructure
{
    public interface IProfileSettingsService
    {
        IEnumerable<NotificationsDomain> GetNotificationSettings(string userId);
        UpsertResult<IEnumerable<NotificationsDomain>> UpsertNotificationSettings(IEnumerable<NotificationsDomain> model);
        DeliveryAddressDomain GetDeliveryAddress(string userId);
        UpsertResult<DeliveryAddressDomain> UpsertDeliveryAddress(DeliveryAddressDomain model);
        AuthorizedPersonDomain GetAuthorizedPersonSettings(string userId);
        UpsertResult<AuthorizedPersonDomain> UpsertAuthorizedPersonSettings(AuthorizedPersonDomain model);
        LoginSettingsDomain GetLoginSettings(string userId);
        UpsertResult<LoginSettingsDomain> UpsertLoginSettings(LoginSettingsDomain model);

    }
}
