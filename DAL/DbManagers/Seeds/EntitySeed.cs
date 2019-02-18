using System;
using System.Linq;
using AutoMapper;
using Common.Configuration;
using DAL.Model;
using Domain.Entity;
using Domain.FileParser;
using Domain.FileParser.Excel;
using System.Reflection;
using Common;

namespace DAL.DbManagers.Seeds
{
    public class EntitySeed : AbstractSeed
    {
        private string ResourceName => "DAL.DbManagers.Seeds.SeedData.Entities.xlsx";

        public EntitySeed(DataBase context) : base(context, SeedType.Basic, 2)
        {
        }

        protected override void DoSeed()
        {
            var parser = new ExcelFileParser<EntityAccountFileRecordModel>();

            ParseResult<EntityAccountFileRecordModel> result = null;

            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(ResourceName))
            {
                result = parser.Parse(stream);
            }

            Defensive.AssertTrue(result.Success);
            
            foreach (var group in result.Records.GroupBy(x => x.Name))
            {
                var entity = Mapper.Map<Entity>(group.First());

                entity.Ibans = group.Select(x =>
                {
                    if (x.Iban != null)
                    {
                        x.Iban = x.Iban.Replace(" ", "");
                    }

                    return Mapper.Map<Iban>(x);
                })
                .ToList();

                Context.Add(entity); //todo use repository
            }
        }
    }
}
