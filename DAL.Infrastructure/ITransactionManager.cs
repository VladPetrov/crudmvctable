using System;
using System.Data;
using JetBrains.Annotations;

namespace DAL.Infrastructure
{
    public interface ITransactionManager
    {
        void DoInTransaction([NotNull] Action action, IsolationLevel isolationLevel = IsolationLevel.RepeatableRead);

        [CanBeNull]
        T DoInTransaction<T>([NotNull] Func<T> func, IsolationLevel isolationLevel = IsolationLevel.RepeatableRead);
    }
}