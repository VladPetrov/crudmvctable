using System;
using System.Collections.Generic;
using Common.Table;
using Domain.Balance;

namespace BLL.Infrastructure
{
    public interface IEndBalanceService
    {
        EndBalance Calculate(List<Filter> filters);
    }
}