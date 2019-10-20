using System.Collections.Generic;

namespace Domain.ProfileSettings
{
    public class NotificationsViewModel
    {
        public List<NotificationsDomain> Notifications { get; set; }

        public string UserId { get; set; }
    }
}
