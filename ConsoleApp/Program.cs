using BLL.Infrastructure;
using Common;
using DAL.Infrastructure;
using DAL.Model;
using Domain.Files;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Linq;

namespace ConsoleApp
{
    class Program
    {
        private static IServiceProvider Ioc;


        static void Main(string[] args)
        {
            Init();

            try
            {
                DoWork();
            }
            catch (Exception e)
            {
                Log.Logger().Error(e, "Error while processing file");
            }

            Console.ReadKey();
        }

        private static void Init()
        {
            Ioc = IocConfigurator.CreateContainer("");
        }

        private static void DoWork()
        {
            var context = Ioc.GetService<DataBase>();

            using (var transaction = context.Database.BeginTransaction())
            {
                foreach (var project in context.Projects)
                {
                    project.Budget = project.Budget * 100;
                    Log.Logger().Information("processed one item");
                }

                context.SaveChanges();

                transaction.Commit();
                Log.Logger().Information("transaction.Commit()");
            }
        }
    }
}