using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using BLL.Infrastructure;

namespace BLL
{
    public class ValidateService : IValidateService
    {
        public bool IsValid<TEntity>(IEnumerable<TEntity> items, out string message) where TEntity : class
        {
            message = string.Empty;

            var errors = new List<string>();

            foreach (var i in items)
            {
                if (!IsValid(i, out var err))
                {
                    errors.Add(err);
                }
            }
            message = string.Join("; ", errors);

            return !errors.Any();
        }

        public bool IsValid(object item, out string errorMessage)
        {
            errorMessage = null;

            var context = new ValidationContext(item, serviceProvider: null, items: null);
            var results = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(item, context, results, true);

            if (!isValid)
            {
                var stb = new StringBuilder();
                results.ForEach(x =>
                {
                    stb.AppendLine(x.ErrorMessage);
                });
                errorMessage = stb.ToString();
            }

            return isValid;
        }
    }
}
