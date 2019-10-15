using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BLL.Infrastructure;
using Common.Table;
using DAL.Model;
using DAL.Repositories;
using Domain;
using Domain.Client;
using Domain.DeleteResult;
using DAL.Extensions;

namespace BLL
{
    public class ClientServiceTr : BaseRepository<DataBase, string>, IClientService
    {
        public ClientServiceTr(DataBase context) : base(context)
        {
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
            throw new NotImplementedException();
        }

        public OperationResult<DeleteResult> Delete(string id)
        {
            throw new NotImplementedException();
        }
    }
}
