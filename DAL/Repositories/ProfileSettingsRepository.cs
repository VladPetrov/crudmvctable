using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Common;
using DAL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.ProfileSettings;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class ProfileSettingsRepository : IProfileSettingsRepository
    {
        private DataBase Context { get; }

        public ProfileSettingsRepository(DataBase context)
        {
            Context = context;
        }

        public NotificationsViewModel GetNotificationSettings(string userId)
        {
            return new NotificationsViewModel
            {
                Notifications = Context.ClientFirms
                    .Where(x => x.ProfileId == userId)
                    .ProjectTo<NotificationsDomain>()
                    .ToList(),

                UserId = userId
            };
        }
        
        public UpsertResult<NotificationsViewModel> UpsertNotificationSettings(NotificationsViewModel model)
        {
            Defensive.AssertTrue(model.Notifications != null && model.Notifications.Any());
            
            foreach (var domain in model.Notifications)
            {
                var firm = Context.ClientFirms.FirstOrDefault(x => x.Id == domain.Id);

                Mapper.Map(domain, firm);
            }

            Context.SaveChanges();

            return UpsertResult<NotificationsViewModel>.Ok(GetNotificationSettings(model.UserId));
        }

        public DeliveryAddressDomain GetDeliveryAddress(string userId)
        {
            return Context.ClientDeliveryAddresses
                               .ProjectTo<DeliveryAddressDomain>()
                               .SingleOrDefault(x => x.Id == userId) 
                           ?? new DeliveryAddressDomain { Id = userId};
        }

        public UpsertResult<DeliveryAddressDomain> UpsertDeliveryAddress(DeliveryAddressDomain model)
        {
            var profile = Context.ClientProfiles
                .Where(x => x.Id == model.Id)
                .Include(x => x.DeliveryAddress)
                .Single();

            if (profile.DeliveryAddress == null)
            {
                profile.DeliveryAddress = Mapper.Map<ClientDeliveryAddress>(model);
            }
            else
            {
                Mapper.Map(model, profile.DeliveryAddress);
            }

            Context.SaveChanges();

            return UpsertResult<DeliveryAddressDomain>.Ok(GetDeliveryAddress(model.Id));
        }

        public AuthorizedPersonDomain GetAuthorizedPersonsSettings(string userId)
        {
            return Context.ClientAuthorizedPersons
                               .ProjectTo<AuthorizedPersonDomain>()
                               .SingleOrDefault() 
                           ?? new AuthorizedPersonDomain { Id = userId };
        }

        public UpsertResult<AuthorizedPersonDomain> UpsertAuthorizedPersonsSettings(AuthorizedPersonDomain model)
        {
            var profile = Context.ClientProfiles
                .Where(x => x.Id == model.Id)
                .Include(x => x.AuthorizedPersons)
                .Single();


            if (profile.AuthorizedPersons == null)
            {
                profile.AuthorizedPersons = Mapper.Map<ClientAuthorizedPersons>(model);
            }
            else
            {
                Mapper.Map(model, profile.AuthorizedPersons);
            }

            Context.SaveChanges();

            return UpsertResult<AuthorizedPersonDomain>.Ok(GetAuthorizedPersonsSettings(model.Id));
        }
    }
}
