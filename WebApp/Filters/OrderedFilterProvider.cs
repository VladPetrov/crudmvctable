using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WebApp.Filters
{
    public class OrderedFilterProvider : IFilterProvider
    {
        public void OnProvidersExecuting(FilterProviderContext context)
        {
            throw new NotImplementedException();
        }

        public void OnProvidersExecuted(FilterProviderContext context)
        {
            throw new NotImplementedException();
        }

        public int Order { get; }
    }
}
