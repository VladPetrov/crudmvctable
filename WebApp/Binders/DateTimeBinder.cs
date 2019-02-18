using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Common;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace WebApp.Binders
{
    public class DateTimeBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext == null)
            {
                throw new ArgumentNullException(nameof(bindingContext));
            }

            var modelName = bindingContext.ModelName;

            // Try to fetch the value of the argument by name
            var valueProviderResult = bindingContext.ValueProvider.GetValue(modelName);

            if (valueProviderResult == ValueProviderResult.None)
            {
                return Task.CompletedTask;
            }

            bindingContext.ModelState.SetModelValue(modelName, valueProviderResult);

            var value = valueProviderResult.FirstValue;

            try
            {
                bindingContext.Result = ModelBindingResult.Success(DateTimeContext.Parse(value));
            }
            catch (ArgumentException e)
            {
                bindingContext.ModelState.TryAddModelError(modelName, e.Message);
            }

            return Task.CompletedTask;
        }
    }
}
