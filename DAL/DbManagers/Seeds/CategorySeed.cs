using Common.Configuration;
using DAL.Model;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using AutoMapper;
using Common;
using Domain.Category;
using Domain.Entity;
using Domain.FileParser;
using Domain.FileParser.Excel;

namespace DAL.DbManagers.Seeds
{
    public class CategorySeed : AbstractSeed
    {
        private string ResourceName => "DAL.DbManagers.Seeds.SeedData.Categories.xlsx";

        public CategorySeed(DataBase context) : base(context, SeedType.Basic, 2)
        {
        }

        protected override void DoSeed()
        {
            var parser = new ExcelFileParser<CategoryFileRecordModel>();

            ParseResult<CategoryFileRecordModel> result = null;

            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(ResourceName))
            {
                result = parser.Parse(stream);
            }

            Defensive.AssertTrue(result.Success);

            foreach (var group in result.Records.GroupBy(x => x.Category))
            {
                var category = new Category {Name = group.Key};

                group.ToList().ForEach(x => category.Categories.Add(new SubCategory{Name = x.SubCategory}));
                
                Context.Add(category); //todo use repository
            }
        }
    }
}
