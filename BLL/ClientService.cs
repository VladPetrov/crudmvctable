using BLL.Infrastructure;
using Common.Table;
using DAL.Infrastructure;
using DAL.Model;
using DAL.Repositories;
using Domain;
using Domain.Client;
using Domain.DeleteResult;

namespace BLL
{
    public class ClientService : BaseRepository<DataBase, string>, IClientService
    {
        private AppsUserManager UserManager { get; }
        private IEmailSenderService EmailSender { get; }
        private IClientRepository Repository { get; }

        public ClientService(DataBase context, AppsUserManager userManager, IEmailSenderService emailSender, IClientRepository repository) : base(context)
        {
            UserManager = userManager;
            EmailSender = emailSender;
            Repository = repository;
        }

        public ListResult<ClientDisplay> List(ListRequest request)
        {
            return Repository.List(request);
        }

        public OperationResult<ClientDomain> GetById(string id)
        {
            return OperationResult.Ok().SetData(Repository.GetById(id));
        }

        public UpsertResult<ClientDomain> Upsert(ClientDomain domain)
        {
            var result = Repository.Upsert(domain);
            
            //if (result.Success) // if created or changed email send greeting email ????
            {
                //var callbackUrl = Url.EmailConfirmationLink(user.Id.ToString(), code, Request.Scheme);

                //await EmailSender.SendEmailConfirmationAsync(model.Email, callbackUrl);
            }

            return result;
        }

        public OperationResult<DeleteResult> Delete(string id)
        {
            return Repository.Delete(id).ToOperationResult();
        }
    }
}
