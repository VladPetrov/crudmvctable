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
            var client = domain.IsNew ? ApplicationUser.CreateClient()
                : UserManager
                    .Users
                    .Where(x => x.Id == domain.Id)
                    .Include(x => x.ClientProfile)
                    .Single();

            Mapper.Map(domain, client);

            IdentityResult result = null;

            result = domain.IsNew ? UserManager.CreateAsync(client).Result : UserManager.UpdateAsync(client).Result;

            if (result.Succeeded)
            {
                UserManager.AddToRoleAsync(client, RoleNames.Client).Wait();
                
                return UpsertResult<ClientDomain>.Ok(GetById(client.Id));
            }

            return UpsertResult<ClientDomain>.Error(string.Join(" ", result.Errors.Select(x => x.Description)));
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
