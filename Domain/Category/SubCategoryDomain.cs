namespace Domain.Category
{
    public class SubCategoryDomain : DomainBase, IChildEntity
    {
        public string Name { get; set; }
        public long MusterEntityFk { get; set; }
    }
}
