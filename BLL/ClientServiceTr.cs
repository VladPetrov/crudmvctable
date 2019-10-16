using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using BLL.Infrastructure;
using Common;
using Common.Exceptions;
using Common.StringConstants;
using Common.Table;
using DAL.Model;
using DAL.Repositories;
using Domain;
using Domain.Client;
using Domain.DeleteResult;
using DAL.Extensions;
using Microsoft.AspNetCore.Identity;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace BLL
{
    public class ClientServiceTr : BaseRepository<DataBase, string>, IClientService
    {
        private AppsUserManager UserManager { get; }

        private IEmailSenderService EmailSender { get; }

        public ClientServiceTr(DataBase context, AppsUserManager userManager, IEmailSenderService emailSender) : base(context)
        {
            UserManager = userManager;
            EmailSender = emailSender;
        }

        public ListResult<ClientDisplay> List(ListRequest request)
        {
            return Context.Users
                .Where(x => x.UserType == UserType.Client)
                .ApplyTableRequest<ApplicationUser, ClientDisplay, string>(request);
        }

        public OperationResult<ClientDomain> GetById(string id)
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

            return OperationResult.Ok().SetData(client);
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

                var code = UserManager.GenerateEmailConfirmationTokenAsync(client).Result;

                //var callbackUrl = Url.EmailConfirmationLink(user.Id.ToString(), code, Request.Scheme);

                //await EmailSender.SendEmailConfirmationAsync(model.Email, callbackUrl);

                Log.Logger().Information("User created a new client.");
                
                return UpsertResult<ClientDomain>.Ok(GetById(client.Id).Data);
            }

            return UpsertResult<ClientDomain>.Error(string.Join(" ", result.Errors.Select(x => x.Description)));
        }

        public OperationResult<DeleteResult> Delete(string id)
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
                        UserManager.DeleteAsync(client).Wait();

                    }
                })
                .ToOperationResult();
        }
    }
}
