using System;
using System.Collections.Generic;

namespace Domain.Balance
{
    public class EndBalance : DomainBase
    {
        public long BalanceOnStartDate { get; set; }
        public long BalanceOnEndDate { get; set; }
        public long TotalIncome { get; set; }
        public long TotalExpenses { get; set; }
        public long TotalAmount { get; set; }
        public long AvailableBalance { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public List<ProjectEndBalance> ProjectsBalances { get; set; } = new List<ProjectEndBalance>();
    }

    public class ProjectEndBalance
    {
        public string Name { get; set; }
        public long Budget { get; set; }
        public long Expenses { get; set; }
        public long Saldo => Budget - Math.Abs(Expenses);
    }
}
