using System;
using System.Linq;
using AutoMapper;
using Common;
using Common.Configuration;
using DAL.Model;
using Domain.FileParser;
using System.Reflection;
using Domain.FileParser.Excel;
using Domain.Project;

namespace DAL.DbManagers.Seeds
{
    public class ProjectSeed : AbstractSeed
    {
        private string ResourceName => "DAL.DbManagers.Seeds.SeedData.Projects.xlsx";

        public ProjectSeed(DataBase context) : base(context, SeedType.Basic, 3)
        {
        }

        protected override void DoSeed()
        {
            var parser = new ExcelFileParser<ProjectFileRecordModel>();

            parser.AddDateTimeFormat("dd/MM/yyyy");

            ParseResult<ProjectFileRecordModel> result = null;

            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(ResourceName))
            {
                result = parser.Parse(stream);
            }

            //Defensive.AssertTrue(result.Success);

            result.Records.ForEach(model =>
            {
                Console.WriteLine(model.Entity);

                var account = Mapper.Map<Project>(model);

                account.Budget = account.Budget * 100;

                //var entity = Context.Entities.Single(x => x.Name == model.Entity);

               //Defensive.AssertNotNull(entity, $"Entity with name {model.Entity} was not found");

                //account.Entities.Add(new EntityProject { LeftLink = entity });

                Context.Add(account);
            });
        }
    }
}
