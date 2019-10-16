using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using BLL.Infrastructure;
using Common;
using Common.StringConstants;
using Common.Table;
using DAL.Model;
using DAL.Repositories;
using Domain;
using Domain.Client;
using Domain.DeleteResult;
using DAL.Extensions;
using Microsoft.AspNetCore.Identity;

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
            throw new NotImplementedException();
        }

        public UpsertResult<ClientDomain> Upsert(ClientDomain domain)
        {
            ApplicationUser client = null;
            
            if (domain.IsNew)
            {
                client = ApplicationUser.CreateClient();
            }

            Mapper.Map(domain, client);
            
            //client.Email = domain.Email;
            //client.UserName = domain.Email;

            //client.ClientProfile = new ClientProfile
            //{
            //    Name = domain.ClientName,
            //    Balance = domain.Balance,
            //    ContractStartDate = domain.ContractStartDate,
            //    ContractEndDate = domain.ContractEndDate
            //};

            IdentityResult result = null;

            if (domain.IsNew)
            {
                result = UserManager.CreateAsync(client).Result;
            }
            else
            {
                result = UserManager.UpdateAsync(client).Result;
            }
            
            if (result.Succeeded)
            {
                UserManager.AddToRoleAsync(client, RoleNames.Client).Wait();

                var code = UserManager.GenerateEmailConfirmationTokenAsync(client).Result;

                //var callbackUrl = Url.EmailConfirmationLink(user.Id.ToString(), code, Request.Scheme);

                //await EmailSender.SendEmailConfirmationAsync(model.Email, callbackUrl);

                Log.Logger().Information("User created a new client.");

                return UpsertResult<ClientDomain>.Ok(domain);
            }

            return UpsertResult<ClientDomain>.Error(string.Join("; ", result.Errors.Select(x => x.Description)));
        }

        public OperationResult<DeleteResult> Delete(string id)
        {
            throw new NotImplementedException();
        }
    }
}
