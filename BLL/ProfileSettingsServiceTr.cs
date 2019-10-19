using AutoMapper;
using BLL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.ProfileSettings;
using System;
using System.Collections.Generic;
using System.Linq;

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
            var settings = Context.ClientDeliveryAddresses.SingleOrDefault(x => x.Id == userId) ?? new ClientDeliveryAddress();
            
            return Mapper.Map<DeliveryAddressDomain>(settings);
        }

        public UpsertResult<DeliveryAddressDomain> UpsertDeliveryAddress(DeliveryAddressDomain model)
        {
            var entity = Mapper.Map<ClientDeliveryAddress>(model);

            Upsert(entity);
            
            return UpsertResult<DeliveryAddressDomain>.Ok(GetDeliveryAddress(entity.Id));
        }

        public AuthorizedPersonDomain GetAuthorizedPersonSettings(string userId)
        {
            var settings = Context.ClientAuthorizedPersons.SingleOrDefault(x => x.Id == userId) ?? new ClientAuthorizedPersons();

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
