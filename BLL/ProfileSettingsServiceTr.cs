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
