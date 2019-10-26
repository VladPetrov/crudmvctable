using System;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Common.Exceptions;
using Common.StringConstants;
using Common.Table;
using DAL.Extensions;
using DAL.Infrastructure;
using DAL.Model;
using Domain;
using Domain.Client;
using Domain.DeleteResult;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Common;

namespace DAL.Repositories
{
    public class ClientRepository : BaseRepository<DataBase, string>, IClientRepository
    {
        private AppsUserManager UserManager { get; }

        private static readonly object UpsertLockObject = new object();

        public ClientRepository(DataBase context, AppsUserManager userManager) : base(context)
        {
            UserManager = userManager;

            ReferenceChecker.RegisterReferences(new Reference<ClientFirm, string>(firm => firm.ProfileId));
        }

        public ListResult<ClientDisplay> List(ListRequest request)
        {
            return UserManager.Users
                .Where(x => x.UserType == UserType.Client)
                .ApplyTableRequest<ApplicationUser, ClientDisplay, string>(request);
        }

        public ClientDomain GetById(string id)
        {
            var client = UserManager
                .Users
                .Where(x => x.Id == id)
                .ProjectTo<ClientDomain>()
                .FirstOrDefault();

            if (client == null)
            {
                throw new EntityNotFoundException($"Client with Id '{id}' was not found");
            }

            return client;
        }

        public UpsertResult<ClientDomain> Upsert(ClientDomain domain)
        {
            lock (UpsertLockObject)
            {
                var client = domain.IsNew ? ApplicationUser.CreateClient()
                    : UserManager
                        .Users
                        .Where(x => x.Id == domain.Id)
                        .Include(x => x.ClientProfile)
                        .Include(x => x.ClientProfile.Firms)
                        .Single();

                var defaultFirmNameWasChanged = !domain.IsNew && domain.DefaultFirmName != client.ClientProfile.DefaultFirmName;
            
                Mapper.Map(domain, client);

                IdentityResult result = null;

                if (domain.IsNew)
                {
                    if (!FirmNameIsUnique(domain.DefaultFirmName))
                    {
                        return UpsertResult<ClientDomain>.Error($"Firm name '{domain.DefaultFirmName}' already exists");
                    }
                
                    client.ClientProfile.Firms.Add(ClientFirm.CreateDefaultFirm(domain.DefaultFirmName)); //create default firm

                    result = UserManager.CreateAsync(client).Result;
                }
                else
                {
                    if (defaultFirmNameWasChanged)
                    {
                        var defaultFirm = client.ClientProfile.Firms.Single(x => x.FirmType == FirmType.Default);
                    
                        if (!FirmNameIsUnique(domain.DefaultFirmName, defaultFirm.Id))
                        {
                            return UpsertResult<ClientDomain>.Error($"Firm name '{domain.DefaultFirmName}' already exists");
                        }

                        defaultFirm.Name = domain.DefaultFirmName; //update default firm
                    }

                    result = UserManager.UpdateAsync(client).Result;
                }

                if (result.Succeeded)
                {
                    UserManager.AddToRoleAsync(client, RoleNames.Client).Wait();
                
                    return UpsertResult<ClientDomain>.Ok(GetById(client.Id));
                }

                return UpsertResult<ClientDomain>.Error(string.Join(" ", result.Errors.Select(x => x.Description)));
            }
        }

        private bool FirmNameIsUnique(string firmName, string excludeFirmId = null)
        {
            var query = Context.ClientFirms.AsQueryable();

            if (excludeFirmId != null)
            {
                query = query.Where(x => x.Id != excludeFirmId);
            }
            
            return query.All(x => !string.Equals(x.Name, firmName, StringComparison.InvariantCultureIgnoreCase));
        }

        public DeleteResult Delete(string id)
        {
            return ReferenceChecker
                .Check(id)
                .OnDelete(() =>
                {
                    var client = UserManager
                        .Users
                        .SingleOrDefault(x => x.Id == id);

                    if (client != null)
                    {
                        Defensive.AssertTrue(client.UserType == UserType.Client);

                        UserManager.DeleteAsync(client).Wait();
                    }
                });
        }
    }
}
