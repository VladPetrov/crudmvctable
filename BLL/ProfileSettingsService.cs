using System;
using System.Collections.Generic;
using System.Text;
using BLL.Infrastructure;
using Domain;
using Domain.ProfileSettings;

namespace BLL
{
    public class ProfileSettingsService : IProfileSettingsService
    {
        public IEnumerable<NotificationsDomain> GetNotificationSettings(string userId)
        {
            throw new NotImplementedException();
        }

        public UpsertResult<IEnumerable<NotificationsDomain>> UpsertNotificationSettings(IEnumerable<NotificationsDomain> model)
        {
            throw new NotImplementedException();
        }

        public DeliveryAddressDomain GetDeliveryAddress(string userId)
        {
            throw new NotImplementedException();
        }

        public UpsertResult<DeliveryAddressDomain> UpsertDeliveryAddress(DeliveryAddressDomain model)
        {
            throw new NotImplementedException();
        }

        public AuthorizedPersonDomain GetAuthorizedPersonSettings(string userId)
        {
            throw new NotImplementedException();
        }

        public UpsertResult<AuthorizedPersonDomain> UpsertAuthorizedPersonSettings(AuthorizedPersonDomain model)
        {
            throw new NotImplementedException();
        }

        public LoginSettingsDomain GetLoginSettings(string userId)
        {
            throw new NotImplementedException();
        }

        public UpsertResult<LoginSettingsDomain> UpsertLoginSettings(LoginSettingsDomain model)
        {
            throw new NotImplementedException();
        }
    }
}
