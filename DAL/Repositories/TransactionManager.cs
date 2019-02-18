using System;
using System.Data;
using DAL.Infrastructure;
using DAL.Model;
using JetBrains.Annotations;

namespace DAL.Repositories
{
    [UsedImplicitly]
    public class TransactionManager : ITransactionManager
    {
        private DataBase Context { get; }

        public TransactionManager(DataBase context)
        {
            Context = context;
        }

        public void DoInTransaction(Action action, IsolationLevel isolationLevel = IsolationLevel.RepeatableRead)
        {
            Context.DoInTransaction(action);
        }
        
        public T DoInTransaction<T>(Func<T> func, IsolationLevel isolationLevel = IsolationLevel.RepeatableRead)
        {
            return Context.DoInTransaction(func);
        }
    }
}