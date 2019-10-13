using System;
using System.Linq.Expressions;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Message;

namespace DAL.Repositories
{
    public class SubMessageRepository : GenericCrudRepository<DataBase, SubMessage, SubMessageDisplay, SubMessageDetails, long>, ISubMessageRepository
    {
        public SubMessageRepository(DataBase context) : base(context)
        {
        }
    }
}
