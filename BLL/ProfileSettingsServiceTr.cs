using AutoMapper;
using BLL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.ProfileSettings;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace BLL
{
    public class ProfileSettingsServiceTr : IProfileSettingsService
    {
        private DataBase Context { get; }

        public ProfileSettingsServiceTr(DataBase context)
        {
            Context = context;
        }

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
            var settings = Context.ClientDeliveryAddresses
                               .ProjectTo<DeliveryAddressDomain>()
                               .SingleOrDefault(x => x.Id == userId) 
                           ?? new DeliveryAddressDomain { Id = userId};
            
            return settings;
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

        public AuthorizedPersonDomain GetAuthorizedPersonSettings(string userId)
        {
            var settings = Context.ClientAuthorizedPersons.SingleOrDefault(x => x.Id == userId) 
                           ?? new ClientAuthorizedPersons{ Id = userId };

            return Mapper.Map<AuthorizedPersonDomain>(settings);
        }

        public UpsertResult<AuthorizedPersonDomain> UpsertAuthorizedPersonSettings(AuthorizedPersonDomain model)
        {
            var entity = Mapper.Map<ClientAuthorizedPersons>(model);

            Upsert(entity);

            return UpsertResult<AuthorizedPersonDomain>.Ok(GetAuthorizedPersonSettings(entity.Id));
        }

        public LoginSettingsDomain GetLoginSettings(string userId)
        {
            throw new NotImplementedException();
        }

        public UpsertResult<LoginSettingsDomain> UpsertLoginSettings(LoginSettingsDomain model)
        {
            throw new NotImplementedException();
        }

        private void Upsert<TEntity>(TEntity entity)
        {
            Context.Update(entity);

            Context.SaveChanges();
        }
    }
}
