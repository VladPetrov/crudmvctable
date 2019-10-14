using BLL.Infrastructure;
using Common;
using Common.Extensions;
using Common.Table;
using DAL.Extensions;
using DAL.Model;
using Domain.Balance;
using Domain.Transaction;
using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    [UsedImplicitly]
    public class EndBalanceServiceTr : IEndBalanceService
    {
        private DataBase Context { get; }

        public EndBalanceServiceTr(DataBase context)
        {
            Context = context;
        }
        
        public EndBalance Calculate(List<Filter> filters)
        {
            if (filters == null)
            {
                return null;
            }

            var startFilter = filters.FindStartDateFilter(nameof(TransactionDisplay.CreatedTime));
            var endFilter = filters.FindEndDateFilter(nameof(TransactionDisplay.CreatedTime));

            if (startFilter == null || endFilter == null)
            {
                return null;
            }
            
            var transactionsAmount = Context.Transactions
                .ApplyTableRequestIQueryable<Transaction, TransactionDisplay, long>(CreateTableRequest(filters))
                .Select(x => x.Amount)
                .ToList();

            var startDate = DateTimeContext.Parse(startFilter.Value.ToString());
            var endDate = DateTimeContext.Parse(endFilter.Value.ToString()); 

            var totalExpenses = transactionsAmount.Where(x => x < 0).Sum();
            var totalIncome = transactionsAmount.Where(x => x > 0).Sum();
            var balanceOnStartDate = Context.Transactions.Where(x => x.CreatedTime <= startDate).Sum(x => x.Amount);
            var balanceOnEndDate = Context.Transactions.Where(x => x.CreatedTime <= endDate).Sum(x => x.Amount);
            var availableBalance = Context.Transactions.Sum(x => x.Amount);

            var filterByProjectStr = filters.SingleFilterOrDefault(nameof(TransactionDisplay.ProjectId))?.Value?.ToString();

            var filterByProject = filterByProjectStr != null ? long.Parse(filterByProjectStr) as long? : null;

            return new EndBalance
            {
                BalanceOnStartDate = balanceOnStartDate,
                BalanceOnEndDate = balanceOnEndDate,
                AvailableBalance = availableBalance,
                TotalExpenses = totalExpenses,
                TotalIncome = totalIncome,
                TotalAmount = totalExpenses + totalIncome,
                StartDate = startDate,
                EndDate = endDate,
                ProjectsBalances = CalculateProjectsBalances(startDate, endDate, filterByProject)
            };
        }

        private ListRequest CreateTableRequest(List<Filter> filters)
        {
            return new ListRequest(filters, null, 0, 0, true);
        }

        private List<ProjectEndBalance> CalculateProjectsBalances(DateTime startDate, DateTime endDate, long? projectId)
        {
            var balances = new List<ProjectEndBalance>();

            var projects = Context.Projects
                .Where(x => x.EndDate >= startDate && !(x.StartDate > endDate && x.EndDate > endDate))
                .Where(x => projectId == null || x.Id == projectId)
                .Select(x => new
                {
                    x.Name,
                    x.Budget,
                    x.Id
                })
                .ToList();

            var expenses = Context.Transactions
                .Where(x => x.CreatedTime >= startDate && x.CreatedTime <= endDate)
                .Where(x => x.Amount < 0)
                .Where(x => x.ProjectId != null)
                .Select(x => new {x.Amount, x.ProjectId})
                .ToList();
            
            foreach (var project in projects)
            {
                balances.Add(new ProjectEndBalance
                {
                    Name = project.Name,
                    Budget = project.Budget,
                    Expenses = expenses.Where(exp => exp.ProjectId == project.Id).Sum(exp => exp.Amount)
                });
            }

            return balances;
        }
    }
}
