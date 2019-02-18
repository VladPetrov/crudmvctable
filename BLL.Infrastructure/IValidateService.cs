using System.Collections.Generic;

namespace BLL.Infrastructure
{
    public interface IValidateService
    {
        bool IsValid<TEntity>(IEnumerable<TEntity> items, out string message) where TEntity : class;
        bool IsValid(object item, out string errorMessage);
    }
}
