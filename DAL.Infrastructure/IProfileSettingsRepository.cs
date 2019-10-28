using Domain;
using Domain.ProfileSettings;

namespace DAL.Infrastructure
{
    public interface IProfileSettingsRepository
    {
        NotificationsViewModel GetNotificationSettings(string userId);
        UpsertResult<NotificationsViewModel> UpsertNotificationSettings(NotificationsViewModel model);
        DeliveryAddressDomain GetDeliveryAddress(string userId);
        UpsertResult<DeliveryAddressDomain> UpsertDeliveryAddress(DeliveryAddressDomain model);
        AuthorizedPersonDomain GetAuthorizedPersonsSettings(string userId);
        UpsertResult<AuthorizedPersonDomain> UpsertAuthorizedPersonsSettings(AuthorizedPersonDomain model);
    }
}
